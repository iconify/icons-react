import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sga9agb4m.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sga9agb4m"/>`,
		"fallback": "academicons:stackoverflow-square",
	});
}

export default Component;
