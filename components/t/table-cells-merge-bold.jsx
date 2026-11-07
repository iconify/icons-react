import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myg4xebay.css';
import '../../css/v/vz7kdz1fb.css';
import '../../css/w/w_91c9bhk.css';
import '../../css/c/chnbh0b2d.css';
import '../../css/f/fsm6edcal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myg4xebay"/><path class="vz7kdz1fb"/><path class="w_91c9bhk"/><path class="chnbh0b2d"/><path class="fsm6edcal"/>`,
		"fallback": "solar:table-cells-merge-bold",
	});
}

export default Component;
