import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgulydb7x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgulydb7x"/>`,
		"fallback": "energy-icons:percent-48-bold",
	});
}

export default Component;
