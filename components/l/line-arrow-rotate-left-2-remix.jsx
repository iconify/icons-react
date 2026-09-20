import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m63h_6bsj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m63h_6bsj"/>`,
		"fallback": "streamline-flex:line-arrow-rotate-left-2-remix",
	});
}

export default Component;
