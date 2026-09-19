import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abx_eo5fg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abx_eo5fg"/>`,
		"fallback": "cbi:orbi",
	});
}

export default Component;
