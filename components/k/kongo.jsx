import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/l/lb-lfcbse.css';
import '../../css/o/o0nuu56uu.css';
import '../../css/v/v3vmq-b5d.css';
import '../../css/v/vtefd5b4t.css';
import '../../css/h/h77j_ab7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="lb-lfcbse"/><path class="o0nuu56uu"/><path class="v3vmq-b5d"/><path class="vtefd5b4t"/><path class="h77j_ab7t"/></g>`,
		"fallback": "circle-flags:kongo",
	});
}

export default Component;
