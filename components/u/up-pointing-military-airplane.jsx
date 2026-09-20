import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utl7egypz.css';
import '../../css/t/to5knupti.css';
import '../../css/m/mhlhscthb.css';
import '../../css/d/dpxs1sbzm.css';
import '../../css/l/l02wzmbeb.css';
import '../../css/m/m74xmac5r.css';
import '../../css/x/xaufmbs_i.css';
import '../../css/j/j7qbgkbve.css';
import '../../css/m/mkmej1b3j.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utl7egypz"/><path class="to5knupti"/><path class="mhlhscthb"/><path class="dpxs1sbzm"/><path class="l02wzmbeb"/><g class="m74xmac5r"><path class="xaufmbs_i"/><path class="j7qbgkbve"/><path class="mkmej1b3j"/></g>`,
		"fallback": "openmoji:up-pointing-military-airplane",
	});
}

export default Component;
