import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z01m-gbzl.css';
import '../../css/p/ph28k_b7o.css';
import '../../css/x/x9c25t9_a.css';
import '../../css/q/q1yha8blo.css';
import '../../css/u/uvu0bu_4m.css';
import '../../css/u/urir5lbpf.css';
import '../../css/t/touhe2fwr.css';
import '../../css/t/tkgu1fq8z.css';
import '../../css/n/nttw4kb1d.css';
import '../../css/c/cv5qg457o.css';
import '../../css/w/whfbv-bhk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGjRJiJdVk" x1="744.922" x2="3222.757" y1="-2981.47" y2="-503.635" gradientTransform="matrix(.15 0 0 -.15 -41.648 54.87)" gradientUnits="userSpaceOnUse"><stop offset="0" class="z01m-gbzl"/><stop offset=".08" class="ph28k_b7o"/><stop offset=".16" class="x9c25t9_a"/><stop offset=".24" class="q1yha8blo"/><stop offset=".32" class="uvu0bu_4m"/><stop offset=".4" class="urir5lbpf"/><stop offset=".48" class="touhe2fwr"/><stop offset=".55" class="tkgu1fq8z"/><stop offset=".56" class="nttw4kb1d"/><stop offset="1" class="cv5qg457o"/></linearGradient><path fill="url(#SVGjRJiJdVk)" class="whfbv-bhk"/>`,
		"fallback": "selfhst:ripe-atlas",
	});
}

export default Component;
