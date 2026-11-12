import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu_s1bbby.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu_s1bbby"/>`,
		"fallback": "selfhst:subarr-dark",
	});
}

export default Component;
