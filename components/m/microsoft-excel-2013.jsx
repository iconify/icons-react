import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dab7n5b6s.css';
import '../../css/b/b09xt9blt.css';
import '../../css/v/vxn_s1bui.css';
import '../../css/b/bvl3ofrdb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGxwCe0cNw" x1="256" x2="256" y1="14.332" y2="497.668" gradientUnits="userSpaceOnUse"><stop offset="0" class="dab7n5b6s"/><stop offset="1" class="b09xt9blt"/></linearGradient><path fill="url(#SVGxwCe0cNw)" class="vxn_s1bui"/><path class="bvl3ofrdb"/>`,
		"fallback": "selfhst:microsoft-excel-2013",
	});
}

export default Component;
