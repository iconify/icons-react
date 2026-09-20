import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pn2r-9bzq.css';
import '../../css/v/vsobki5ny.css';
import '../../css/n/n7swwqbdq.css';
import '../../css/f/flb5k9glp.css';
import '../../css/g/gjtfqlb3r.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pn2r-9bzq"/><path class="vsobki5ny"/><path class="n7swwqbdq"/><path class="flb5k9glp"/><path class="gjtfqlb3r"/><path class="ko6o-6b9b"/></g>`,
		"fallback": "solar:reel-broken",
	});
}

export default Component;
