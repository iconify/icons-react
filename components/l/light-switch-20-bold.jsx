import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp_3l1bkn.css';
import '../../css/b/bf-ekebvc.css';
import '../../css/v/vwtrngb6y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp_3l1bkn"/><path class="bf-ekebvc"/><path class="vwtrngb6y"/>`,
		"fallback": "energy-icons:light-switch-20-bold",
	});
}

export default Component;
