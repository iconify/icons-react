import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpf00ybcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpf00ybcb"/>`,
		"fallback": "griddy-icons:key-alt-filled",
	});
}

export default Component;
