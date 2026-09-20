import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/p/pn2r-9bzq.css';
import '../../css/v/vsobki5ny.css';
import '../../css/n/n7swwqbdq.css';
import '../../css/f/flb5k9glp.css';
import '../../css/g/gjtfqlb3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="pn2r-9bzq"/><path class="vsobki5ny"/><path class="n7swwqbdq"/><path class="flb5k9glp"/><path class="gjtfqlb3r"/></g>`,
		"fallback": "solar:reel-linear",
	});
}

export default Component;
