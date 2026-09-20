import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyymw5bvd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyymw5bvd"/>`,
		"fallback": "selfhst:invoke-ai-light",
	});
}

export default Component;
