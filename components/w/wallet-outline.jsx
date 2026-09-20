import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb2wzhlwk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb2wzhlwk"/>`,
		"fallback": "teenyicons:wallet-outline",
	});
}

export default Component;
