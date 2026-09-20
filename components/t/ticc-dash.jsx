import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zur5tsb7z.css';
import '../../css/p/p-38xzm7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zur5tsb7z"/><path class="p-38xzm7t"/>`,
		"fallback": "selfhst:ticc-dash",
	});
}

export default Component;
