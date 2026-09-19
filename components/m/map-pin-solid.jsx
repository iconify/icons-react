import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-yyo-b_d.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-yyo-b_d"/>`,
		"fallback": "fluent-mdl2:map-pin-solid",
	});
}

export default Component;
