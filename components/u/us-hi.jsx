import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/n/nacikeief.css';
import '../../css/w/wmtoxwi4s.css';
import '../../css/o/owihsjbsr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="nacikeief"/><path class="wmtoxwi4s"/><path class="owihsjbsr"/></g>`,
		"fallback": "circle-flags:us-hi",
	});
}

export default Component;
