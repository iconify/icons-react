import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx9jxubpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx9jxubpf"/>`,
		"fallback": "griddy-icons:tooth-damaged-filled",
	});
}

export default Component;
