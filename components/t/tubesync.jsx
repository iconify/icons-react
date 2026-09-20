import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js4054bgn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js4054bgn"/>`,
		"fallback": "selfhst:tubesync",
	});
}

export default Component;
