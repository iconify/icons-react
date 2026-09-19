import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/u/u_a1jabyz.css';
import '../../css/s/sdula80gy.css';
import '../../css/s/s87qs2bwi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="u_a1jabyz"/><path class="sdula80gy"/><path class="s87qs2bwi"/></g>`,
		"fallback": "circle-flags:us-tx",
	});
}

export default Component;
