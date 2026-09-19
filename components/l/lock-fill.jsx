import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c818x0b4f.css';
import '../../css/v/vrte_9f8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="c818x0b4f"/><path class="vrte_9f8u"/>`,
		"fallback": "eva:lock-fill",
	});
}

export default Component;
