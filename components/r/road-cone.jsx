import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ly2hz0bvk.css';
import '../../css/o/obkkcp3cw.css';
import '../../css/v/vbv72gy2h.css';
import '../../css/m/mp7khhbpz.css';
import '../../css/b/bmapv1blm.css';
import '../../css/u/upw0bqbfw.css';
import '../../css/l/lg4irubhj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ly2hz0bvk"/><path class="obkkcp3cw"/><path class="vbv72gy2h"/><path class="mp7khhbpz"/><path class="bmapv1blm"/><path class="upw0bqbfw"/><path class="lg4irubhj"/></g>`,
		"fallback": "icon-park:road-cone",
	});
}

export default Component;
