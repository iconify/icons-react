import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucfux7brf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucfux7brf"/>`,
		"fallback": "selfhst:sidero-dark",
	});
}

export default Component;
