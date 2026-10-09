import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we2agujqc.css';
import '../../css/e/eie_cccui.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we2agujqc"/><path class="eie_cccui"/>`,
		"fallback": "energy-icons:parking-20-bold",
	});
}

export default Component;
