import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v71lst90i.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v71lst90i"/>`,
		"fallback": "fluent-mdl2:map-pin-12",
	});
}

export default Component;
