import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq3m-xb3r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq3m-xb3r"/>`,
		"fallback": "selfhst:kbin-light",
	});
}

export default Component;
