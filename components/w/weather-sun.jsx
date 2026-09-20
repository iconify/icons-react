import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fpll9nmog.css';
import '../../css/p/pqo6v4bsc.css';
import '../../css/r/r_580nbkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fpll9nmog"/><path class="pqo6v4bsc"/><path class="r_580nbkq"/></g>`,
		"fallback": "streamline-ultimate-color:weather-sun",
	});
}

export default Component;
