import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liufp_b5i.css';
import '../../css/m/mgw7p7bzi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="liufp_b5i"/><path class="mgw7p7bzi"/>`,
		"fallback": "energy-icons:iron-20",
	});
}

export default Component;
