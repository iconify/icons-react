import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0z39514c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0z39514c"/>`,
		"fallback": "dashicons:star-half",
	});
}

export default Component;
