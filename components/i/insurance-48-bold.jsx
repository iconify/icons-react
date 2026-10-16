import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc46o1p0z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc46o1p0z"/>`,
		"fallback": "energy-icons:insurance-48-bold",
	});
}

export default Component;
