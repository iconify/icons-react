import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzc9w0z9q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dzc9w0z9q"/>`,
		"fallback": "ix:kpi",
	});
}

export default Component;
