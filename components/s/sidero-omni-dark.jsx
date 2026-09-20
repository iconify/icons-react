import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udy4foket.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udy4foket"/>`,
		"fallback": "selfhst:sidero-omni-dark",
	});
}

export default Component;
