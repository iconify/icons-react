import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk8uo8bex.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk8uo8bex"/>`,
		"fallback": "selfhst:n8n",
	});
}

export default Component;
