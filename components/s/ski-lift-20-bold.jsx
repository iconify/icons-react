import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uabfcuuto.css';
import '../../css/p/pg0nswt9c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uabfcuuto"/><path class="pg0nswt9c"/>`,
		"fallback": "energy-icons:ski-lift-20-bold",
	});
}

export default Component;
