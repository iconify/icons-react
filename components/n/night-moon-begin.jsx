import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/et3fidazi.css';
import '../../css/g/g-no2eohe.css';
import '../../css/j/j0afybc0c.css';
import '../../css/k/k7qgnbciy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="et3fidazi"/><path class="g-no2eohe"/><path class="j0afybc0c"/><path class="k7qgnbciy"/></g>`,
		"fallback": "streamline-ultimate-color:night-moon-begin",
	});
}

export default Component;
