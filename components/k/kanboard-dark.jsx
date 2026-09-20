import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d17vghbib.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d17vghbib"/>`,
		"fallback": "selfhst:kanboard-dark",
	});
}

export default Component;
