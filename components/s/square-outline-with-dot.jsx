import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz0t16b2f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz0t16b2f"/>`,
		"fallback": "pinhead:square-outline-with-dot",
	});
}

export default Component;
