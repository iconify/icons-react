import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp3rf-aea.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp3rf-aea"/>`,
		"fallback": "energy-icons:medical-cross-48-bold",
	});
}

export default Component;
