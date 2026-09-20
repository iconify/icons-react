import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_7u7ibpd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u_7u7ibpd"/>`,
		"fallback": "teenyicons:markdown-solid",
	});
}

export default Component;
