import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdxv9_54x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdxv9_54x"/>`,
		"fallback": "hugeicons:message-add-01",
	});
}

export default Component;
