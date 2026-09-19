import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/ft6d_hbpo.css';
import '../../css/z/z6x9y-b7i.css';
import '../../css/m/mbiqtibsx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="ft6d_hbpo"/><path class="z6x9y-b7i"/><path class="mbiqtibsx"/></g>`,
		"fallback": "circle-flags:lang-th",
	});
}

export default Component;
