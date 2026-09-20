import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd5qy7bda.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd5qy7bda"/>`,
		"fallback": "map:taxi-stand",
	});
}

export default Component;
