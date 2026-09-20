import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq4fvhb4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq4fvhb4m"/>`,
		"fallback": "selfhst:stalwart-dark",
	});
}

export default Component;
