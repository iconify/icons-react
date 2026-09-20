import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtf41p-9o.css';
import '../../css/b/bynye9btr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtf41p-9o"/><path class="bynye9btr"/>`,
		"fallback": "selfhst:strapi-light",
	});
}

export default Component;
