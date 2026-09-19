import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8e41s75w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8e41s75w"/>`,
		"fallback": "ion:md-star-half",
	});
}

export default Component;
