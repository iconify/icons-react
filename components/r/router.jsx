import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/min6896fr.css';
import '../../css/x/x8xe-i45p.css';
import '../../css/r/r1m96mcul.css';
import '../../css/q/quebq7byq.css';
import '../../css/w/wa8h8j42u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="min6896fr"/><path class="x8xe-i45p"/><path class="r1m96mcul"/><path class="quebq7byq"/><path class="wa8h8j42u"/></g>`,
		"fallback": "iconaut:router",
	});
}

export default Component;
