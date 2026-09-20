import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnc9k-r_k.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gnc9k-r_k"/>`,
		"fallback": "pajamas:status-stopped",
	});
}

export default Component;
