import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-5f2htjo.css';
import '../../css/f/fmaln8b1x.css';
import '../../css/g/gjy-pevvw.css';
import '../../css/d/df_l7-bhp.css';
import '../../css/m/m06wy2bms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-5f2htjo"/><path class="fmaln8b1x"/><path class="gjy-pevvw"/><path class="df_l7-bhp"/><path clip-rule="evenodd" class="m06wy2bms"/>`,
		"fallback": "solar:minimalistic-magnifier-bug-bold",
	});
}

export default Component;
