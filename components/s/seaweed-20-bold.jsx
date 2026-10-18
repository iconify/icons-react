import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpj3_ybqz.css';
import '../../css/v/v_f07jpah.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpj3_ybqz"/><path class="v_f07jpah"/>`,
		"fallback": "energy-icons:seaweed-20-bold",
	});
}

export default Component;
