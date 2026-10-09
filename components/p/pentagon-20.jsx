import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipdcptb3m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipdcptb3m"/>`,
		"fallback": "energy-icons:pentagon-20",
	});
}

export default Component;
