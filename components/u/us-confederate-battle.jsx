import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/w9zx08bin.css';
import '../../css/i/i9cvrhbsl.css';
import '../../css/c/cn3jy9j_j.css';
import '../../css/k/kf4p55zdy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="w9zx08bin"/><path class="i9cvrhbsl"/><path class="cn3jy9j_j"/><path class="kf4p55zdy"/></g>`,
		"fallback": "circle-flags:us-confederate-battle",
	});
}

export default Component;
