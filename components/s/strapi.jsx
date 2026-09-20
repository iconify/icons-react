import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l76imif0i.css';
import '../../css/e/e9w-z4r_y.css';
import '../../css/c/c06h_s1-z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l76imif0i"/><path class="e9w-z4r_y"/><path class="c06h_s1-z"/>`,
		"fallback": "selfhst:strapi",
	});
}

export default Component;
