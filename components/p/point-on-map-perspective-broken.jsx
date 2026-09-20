import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n2pw1mffs.css';
import '../../css/f/f7azv0kip.css';
import '../../css/g/gyeonr9rw.css';
import '../../css/c/cahl0fbfp.css';
import '../../css/e/ex9vehb3q.css';
import '../../css/y/yre2wm67g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="n2pw1mffs"/><path class="f7azv0kip"/><path class="gyeonr9rw"/><path class="cahl0fbfp"/><path class="ex9vehb3q"/><path class="yre2wm67g"/></g>`,
		"fallback": "solar:point-on-map-perspective-broken",
	});
}

export default Component;
