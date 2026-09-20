import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u12zo6b3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u12zo6b3m"/>`,
		"fallback": "mdi:relation-one-to-only-one",
	});
}

export default Component;
