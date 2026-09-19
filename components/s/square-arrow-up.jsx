import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9n_irbva.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9n_irbva"/>`,
		"fallback": "f7:square-arrow-up",
	});
}

export default Component;
