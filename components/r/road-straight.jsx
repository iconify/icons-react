import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e7pbq7ble.css';
import '../../css/u/uu_ohjbuk.css';
import '../../css/q/qe4vl5bmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e7pbq7ble"/><path class="uu_ohjbuk"/><path class="qe4vl5bmi"/></g>`,
		"fallback": "streamline-ultimate-color:road-straight",
	});
}

export default Component;
