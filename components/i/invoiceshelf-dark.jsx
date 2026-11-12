import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw8q64y9w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw8q64y9w"/>`,
		"fallback": "selfhst:invoiceshelf-dark",
	});
}

export default Component;
