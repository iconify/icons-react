import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pibr6gbbz.css';
import '../../css/y/ynrpdsbvs.css';
import '../../css/h/hx7sjyb6k.css';
import '../../css/v/v458t9bij.css';
import '../../css/v/v2ew18bts.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pibr6gbbz"/><path class="ynrpdsbvs"/><path class="hx7sjyb6k"/><path class="v458t9bij"/><path class="v2ew18bts"/>`,
		"fallback": "selfhst:noodle-gallery",
	});
}

export default Component;
