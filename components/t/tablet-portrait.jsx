import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/temo6clri.css';
import '../../css/j/j052408uz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="temo6clri"/><path class="j052408uz"/>`,
		"fallback": "famicons:tablet-portrait",
	});
}

export default Component;
