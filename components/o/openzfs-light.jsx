import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf_9k6b0s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf_9k6b0s"/>`,
		"fallback": "selfhst:openzfs-light",
	});
}

export default Component;
