import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e68lvk1dn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e68lvk1dn"/>`,
		"fallback": "gg:push-chevron-left",
	});
}

export default Component;
