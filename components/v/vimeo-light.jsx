import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twipirh2t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twipirh2t"/>`,
		"fallback": "selfhst:vimeo-light",
	});
}

export default Component;
