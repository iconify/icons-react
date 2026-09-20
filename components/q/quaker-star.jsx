import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae_xzgb0d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae_xzgb0d"/>`,
		"fallback": "pinhead:quaker-star",
	});
}

export default Component;
