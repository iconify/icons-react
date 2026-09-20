import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbb4g5h2q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbb4g5h2q"/>`,
		"fallback": "selfhst:paperless-ngx-light",
	});
}

export default Component;
