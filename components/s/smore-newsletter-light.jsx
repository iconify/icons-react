import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgt0q_kas.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgt0q_kas"/>`,
		"fallback": "selfhst:smore-newsletter-light",
	});
}

export default Component;
