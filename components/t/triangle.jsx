import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpe7uw1fh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpe7uw1fh"/>`,
		"fallback": "famicons:triangle",
	});
}

export default Component;
