import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zjn2vi3mu.css';
import '../../css/a/ajngoxb4y.css';
import '../../css/t/tzirhqbqi.css';
import '../../css/l/l_fhmz-ti.css';
import '../../css/m/mu4rs6boa.css';
import '../../css/m/m1liex_ui.css';
import '../../css/g/gm9f2skze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow zjn2vi3mu"/><path class="ajngoxb4y"/><path class="tzirhqbqi"/><path class="l_fhmz-ti"/><path class="mu4rs6boa"/><path class="m1liex_ui"/><path class="gm9f2skze wm-s"/></g>`,
		"fallback": "withicons-retro:phone-off",
	});
}

export default Component;
