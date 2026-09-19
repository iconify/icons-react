import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/s/sanfgr16h.css';
import '../../css/r/rewno4b2x.css';
import '../../css/a/ashr6v62h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="sanfgr16h"/><path class="rewno4b2x"/><path class="ashr6v62h"/></g>`,
		"fallback": "circle-flags:ro",
	});
}

export default Component;
