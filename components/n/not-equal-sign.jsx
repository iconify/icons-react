import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzm6pjbtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzm6pjbtq"/>`,
		"fallback": "hugeicons:not-equal-sign",
	});
}

export default Component;
