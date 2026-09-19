import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/w5xyq8egd.css';
import '../../css/i/i08mdbbdr.css';
import '../../css/l/letow6vpi.css';
import '../../css/y/yttteebpq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="w5xyq8egd"/><path class="i08mdbbdr"/><path class="letow6vpi"/><circle class="yttteebpq"/></g>`,
		"fallback": "circle-flags:us-co",
	});
}

export default Component;
