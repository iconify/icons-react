import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsrjnu5_g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsrjnu5_g"/>`,
		"fallback": "la:seedling",
	});
}

export default Component;
