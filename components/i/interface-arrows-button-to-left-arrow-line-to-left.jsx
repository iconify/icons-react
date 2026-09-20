import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zndlmvb_n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zndlmvb_n"/>`,
		"fallback": "streamline:interface-arrows-button-to-left-arrow-line-to-left",
	});
}

export default Component;
