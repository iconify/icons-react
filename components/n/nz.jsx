import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fg7qoebth.css';
import '../../css/e/eawgmt_hd.css';
import '../../css/e/ed-__735p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="fg7qoebth"/><path class="eawgmt_hd"/><path class="ed-__735p"/></g>`,
		"fallback": "circle-flags:nz",
	});
}

export default Component;
