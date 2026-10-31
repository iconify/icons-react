import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trtb5yb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trtb5yb5h"/>`,
		"fallback": "coolicons:snowflake-round",
	});
}

export default Component;
