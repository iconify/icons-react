import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hdorqgazj.css';
import '../../css/j/jrvp4xlio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hdorqgazj"/><path class="jrvp4xlio"/></g>`,
		"fallback": "keyline-icons:thermometer-sharp-fill",
	});
}

export default Component;
