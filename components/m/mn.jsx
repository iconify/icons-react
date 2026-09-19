import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/aavx29b-o.css';
import '../../css/l/ln4yvpsvz.css';
import '../../css/u/uo-pawe0i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="aavx29b-o"/><path class="ln4yvpsvz"/><path class="uo-pawe0i"/></g>`,
		"fallback": "circle-flags:mn",
	});
}

export default Component;
