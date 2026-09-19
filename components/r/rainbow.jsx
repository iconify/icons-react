import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb5k4m7rj.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb5k4m7rj"/>`,
		"fallback": "fa-solid:rainbow",
	});
}

export default Component;
