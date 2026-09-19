import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/d/dl25jc1ul.css';
import '../../css/h/huww0bb0e.css';
import '../../css/t/tznoqhb6c.css';
import '../../css/n/n_30b__vp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="dl25jc1ul"/><path class="huww0bb0e"/><path class="tznoqhb6c"/><path class="n_30b__vp"/></g>`,
		"fallback": "circle-flags:uy",
	});
}

export default Component;
