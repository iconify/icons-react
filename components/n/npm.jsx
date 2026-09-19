import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzb42w0ym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzb42w0ym"/>`,
		"fallback": "griddy-icons:npm",
	});
}

export default Component;
