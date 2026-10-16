import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcunuwblp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcunuwblp"/>`,
		"fallback": "energy-icons:three-phase-48-bold",
	});
}

export default Component;
