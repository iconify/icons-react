import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kws8bdc5v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kws8bdc5v"/>`,
		"fallback": "selfhst:paperless-ngx",
	});
}

export default Component;
