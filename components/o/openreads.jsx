import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxi2cxbcq.css';
import '../../css/o/oha4__bwk.css';
import '../../css/x/xdt0-8v0j.css';
import '../../css/h/hg97jbboc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxi2cxbcq"/><path class="oha4__bwk"/><path class="xdt0-8v0j"/><path class="hg97jbboc"/>`,
		"fallback": "selfhst:openreads",
	});
}

export default Component;
