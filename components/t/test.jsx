import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yily_k3_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yily_k3_k"/>`,
		"fallback": "grommet-icons:test",
	});
}

export default Component;
