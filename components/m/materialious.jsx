import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmp9n_o2f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmp9n_o2f"/>`,
		"fallback": "selfhst:materialious",
	});
}

export default Component;
