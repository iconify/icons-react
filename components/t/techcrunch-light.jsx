import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8sy_cbmx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8sy_cbmx"/>`,
		"fallback": "selfhst:techcrunch-light",
	});
}

export default Component;
