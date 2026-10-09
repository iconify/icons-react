import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf-lmqboi.css';
import '../../css/c/c8c_oybxb.css';
import '../../css/v/v--izksva.css';
import '../../css/v/vrqg2kbur.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf-lmqboi"/><path class="c8c_oybxb"/><path class="v--izksva"/><path class="vrqg2kbur"/>`,
		"fallback": "energy-icons:sim-card-20-bold",
	});
}

export default Component;
