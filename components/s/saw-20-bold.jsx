import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj41r93vd.css';
import '../../css/n/nfvrmwb9e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj41r93vd"/><path class="nfvrmwb9e"/>`,
		"fallback": "energy-icons:saw-20-bold",
	});
}

export default Component;
