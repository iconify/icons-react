import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha7cf7b5i.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha7cf7b5i"/>`,
		"fallback": "garden:megaphone-fill-12",
	});
}

export default Component;
