import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ydqmpqpzn.css';
import '../../css/v/v0myonblw.css';
import '../../css/b/bbe5m8bjr.css';
import '../../css/m/m9uh0gbex.css';
import '../../css/y/y7pmx_bqz.css';
import '../../css/i/ikgnddbmo.css';
import '../../css/b/b90ceybhx.css';
import '../../css/u/ufj74pa-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGxtLF0bjI)" class="ydqmpqpzn"/><path fill="url(#SVGYt5YccaZ)" class="v0myonblw"/><path fill="url(#SVGS8iGWb4m)" class="bbe5m8bjr"/><defs><linearGradient id="SVGxtLF0bjI" x1="22" x2="20.765" y1="18.912" y2="12.254" gradientUnits="userSpaceOnUse"><stop class="m9uh0gbex"/><stop offset="1" class="y7pmx_bqz"/></linearGradient><linearGradient id="SVGYt5YccaZ" x1="22" x2="21.792" y1="18.893" y2="16.123" gradientUnits="userSpaceOnUse"><stop class="y7pmx_bqz"/><stop offset="1" class="ikgnddbmo"/></linearGradient><linearGradient id="SVGS8iGWb4m" x1="15.2" x2="15.95" y1="4" y2="17.722" gradientUnits="userSpaceOnUse"><stop class="b90ceybhx"/><stop offset="1" class="ufj74pa-q"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:laptop-24",
	});
}

export default Component;
