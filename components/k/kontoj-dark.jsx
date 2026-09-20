import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5c65ns3i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5c65ns3i"/>`,
		"fallback": "selfhst:kontoj-dark",
	});
}

export default Component;
