import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0i_05b_b.css';
import '../../css/m/mp3j7pbyx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0i_05b_b"/><path class="mp3j7pbyx"/>`,
		"fallback": "energy-icons:meter-cabinet-20-bold",
	});
}

export default Component;
