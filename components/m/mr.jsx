import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/rjkm9-bua.css';
import '../../css/o/oz6e2q1oa.css';
import '../../css/y/y5u-3acwz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="rjkm9-bua"/><path class="oz6e2q1oa"/><path class="y5u-3acwz"/></g>`,
		"fallback": "circle-flags:mr",
	});
}

export default Component;
