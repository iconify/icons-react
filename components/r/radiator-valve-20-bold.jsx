import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjaxhlnkd.css';
import '../../css/v/vlwm4ybiy.css';
import '../../css/l/lpnx10b3p.css';
import '../../css/q/qho2-b78i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjaxhlnkd"/><path class="vlwm4ybiy"/><path class="lpnx10b3p"/><path class="qho2-b78i"/>`,
		"fallback": "energy-icons:radiator-valve-20-bold",
	});
}

export default Component;
