import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thnh47bcs.css';
import '../../css/f/fuhaovbal.css';
import '../../css/t/t1nxsq_lx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thnh47bcs"/><path class="fuhaovbal"/><path class="t1nxsq_lx"/>`,
		"fallback": "energy-icons:smart-bulb-20-bold",
	});
}

export default Component;
