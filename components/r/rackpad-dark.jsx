import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dedb0yb3v.css';
import '../../css/a/ajb_knz8l.css';
import '../../css/t/t3eim_b0p.css';
import '../../css/c/cf-p2om4m.css';
import '../../css/f/f6sm47l2z.css';
import '../../css/e/evkrbd45m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dedb0yb3v"/><path class="ajb_knz8l"/><path class="t3eim_b0p"/><path class="cf-p2om4m"/><path class="f6sm47l2z"/><path class="evkrbd45m"/>`,
		"fallback": "selfhst:rackpad-dark",
	});
}

export default Component;
