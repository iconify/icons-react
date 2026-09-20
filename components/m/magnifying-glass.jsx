import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mcdg9kuiw.css';
import '../../css/h/hc39sp4gs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mcdg9kuiw"/><path class="hc39sp4gs"/></g>`,
		"fallback": "streamline-color:magnifying-glass",
	});
}

export default Component;
