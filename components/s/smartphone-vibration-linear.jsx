import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m9lr-xbek.css';
import '../../css/n/n4nddbcfo.css';
import '../../css/g/g8sz4sbjf.css';
import '../../css/d/dkk21mj1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m9lr-xbek"/><path class="n4nddbcfo"/><path class="g8sz4sbjf"/><path class="dkk21mj1n"/></g>`,
		"fallback": "solar:smartphone-vibration-linear",
	});
}

export default Component;
