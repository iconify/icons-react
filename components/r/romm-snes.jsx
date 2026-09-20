import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw7qk-b3z.css';
import '../../css/g/gjqum9bql.css';
import '../../css/k/kd-6tnbaz.css';
import '../../css/u/ue3e7eb-c.css';
import '../../css/t/t497s_bgr.css';
import '../../css/v/vlxr7bckv.css';
import '../../css/h/hrup5n97r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw7qk-b3z"/><path class="gjqum9bql"/><path class="kd-6tnbaz"/><path class="ue3e7eb-c"/><path class="t497s_bgr"/><path class="vlxr7bckv"/><path class="hrup5n97r"/>`,
		"fallback": "selfhst:romm-snes",
	});
}

export default Component;
