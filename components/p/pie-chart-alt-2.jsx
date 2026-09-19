import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv7hfmb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv7hfmb3w"/>`,
		"fallback": "bx:pie-chart-alt-2",
	});
}

export default Component;
