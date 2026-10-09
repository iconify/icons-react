import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoo3f_wso.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoo3f_wso"/>`,
		"fallback": "energy-icons:waterfall-20-bold",
	});
}

export default Component;
