import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apx8kl_5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apx8kl_5e"/>`,
		"fallback": "cbi:sump-pump",
	});
}

export default Component;
