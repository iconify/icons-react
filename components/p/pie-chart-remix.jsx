import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh6_xb39i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hh6_xb39i"/>`,
		"fallback": "streamline-sharp:pie-chart-remix",
	});
}

export default Component;
