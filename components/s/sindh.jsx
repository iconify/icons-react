import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/y/ywlqk53zr.css';
import '../../css/r/rucmhjwzd.css';
import '../../css/d/d_4acsbfb.css';
import '../../css/y/y3jzabcfi.css';
import '../../css/g/g1vz30__a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ywlqk53zr"/><ellipse class="rucmhjwzd"/><ellipse class="d_4acsbfb"/><path class="y3jzabcfi"/><path class="g1vz30__a"/></g>`,
		"fallback": "circle-flags:sindh",
	});
}

export default Component;
