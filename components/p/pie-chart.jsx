import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apon61bjw.css';

const viewBox = {"width":1728,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apon61bjw"/>`,
		"fallback": "fa:pie-chart",
	});
}

export default Component;
