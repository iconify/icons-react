import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v99ydnjao.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v99ydnjao"/>`,
		"fallback": "fa6-solid:train-tram",
	});
}

export default Component;
