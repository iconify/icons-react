import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miv52rbxg.css';
import '../../css/v/v_r2u0_pg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miv52rbxg"/><path class="v_r2u0_pg"/>`,
		"fallback": "circum:microchip",
	});
}

export default Component;
