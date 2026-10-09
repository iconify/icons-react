import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvedukegi.css';
import '../../css/d/db1dkebgl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvedukegi"/><path class="db1dkebgl"/>`,
		"fallback": "energy-icons:oil-20-bold",
	});
}

export default Component;
