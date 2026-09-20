import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8coe8n6d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8coe8n6d"/>`,
		"fallback": "pinhead:shopping-bag-with-pawprint",
	});
}

export default Component;
