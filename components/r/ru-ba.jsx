import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/l/lb-lfcbse.css';
import '../../css/l/l0js99f3p.css';
import '../../css/u/ul3ge0b9c.css';
import '../../css/i/ibv5i6bxs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="lb-lfcbse"/><path class="l0js99f3p"/><path class="ul3ge0b9c"/><circle class="ibv5i6bxs"/></g>`,
		"fallback": "circle-flags:ru-ba",
	});
}

export default Component;
