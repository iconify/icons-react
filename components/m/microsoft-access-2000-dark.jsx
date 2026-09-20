import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl7v89b0r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl7v89b0r"/>`,
		"fallback": "selfhst:microsoft-access-2000-dark",
	});
}

export default Component;
