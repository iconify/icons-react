import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/k/krdqi-6-z.css';
import '../../css/b/bcdj4cc9v.css';
import '../../css/h/hdha3sb8p.css';
import '../../css/x/x6vlmaczm.css';
import '../../css/f/fozs9frit.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="krdqi-6-z"/><path class="bcdj4cc9v"/><path class="hdha3sb8p"/><path class="x6vlmaczm"/><path class="fozs9frit"/></g>`,
		"fallback": "circle-flags:sami",
	});
}

export default Component;
