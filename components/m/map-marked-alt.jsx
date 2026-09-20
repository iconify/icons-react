import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk06r_61c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk06r_61c"/>`,
		"fallback": "la:map-marked-alt",
	});
}

export default Component;
