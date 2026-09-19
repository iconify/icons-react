import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsh5-wo2m.css';

const viewBox = {"width":524,"height":797};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsh5-wo2m"/>`,
		"fallback": "ls:underscore",
	});
}

export default Component;
