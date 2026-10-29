import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3pu-kwzv.css';
import '../../css/r/rwidasb8k.css';
import '../../css/a/aq0i7ac3s.css';
import '../../css/r/rhmo2qb6x.css';
import '../../css/g/g4m61jjpu.css';
import '../../css/r/rizxg_1ak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3pu-kwzv wm-shadow"/><path class="rwidasb8k wm-k"/><path class="aq0i7ac3s wm-k"/><path class="rhmo2qb6x wm-k"/><path class="g4m61jjpu wm-k"/><path class="rizxg_1ak wm-shine"/>`,
		"fallback": "withicons-pastel:minus",
	});
}

export default Component;
