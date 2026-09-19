import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha9sq_r2u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha9sq_r2u"/>`,
		"fallback": "entypo:thumbs-up",
	});
}

export default Component;
