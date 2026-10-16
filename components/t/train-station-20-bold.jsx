import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-s5y9dn.css';
import '../../css/k/knun7bcjk.css';
import '../../css/m/mk8o-v1jo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to-s5y9dn"/><path class="knun7bcjk"/><path class="mk8o-v1jo"/>`,
		"fallback": "energy-icons:train-station-20-bold",
	});
}

export default Component;
