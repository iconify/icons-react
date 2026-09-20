import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk9vcn4yw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk9vcn4yw"/>`,
		"fallback": "tabler:shield-bolt",
	});
}

export default Component;
