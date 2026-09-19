import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/d/d2vi5obgs.css';
import '../../css/z/zlm9_ua_n.css';
import '../../css/c/cgkqrqbvm.css';
import '../../css/d/dr6b1tbyt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="d2vi5obgs"/><path class="zlm9_ua_n"/><path class="cgkqrqbvm"/><path class="dr6b1tbyt"/></g>`,
		"fallback": "circle-flags:sd",
	});
}

export default Component;
