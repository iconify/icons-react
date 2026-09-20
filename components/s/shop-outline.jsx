import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bih5zlbqw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bih5zlbqw"/>`,
		"fallback": "teenyicons:shop-outline",
	});
}

export default Component;
