import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cd_pfhpum.css';
import '../../css/r/rvpdc71wr.css';
import '../../css/y/yce2z9ujw.css';
import '../../css/p/p5lq4_29g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cd_pfhpum"/><path class="rvpdc71wr"/><path class="yce2z9ujw"/><path class="p5lq4_29g"/></g>`,
		"fallback": "streamline-ultimate-color:module",
	});
}

export default Component;
