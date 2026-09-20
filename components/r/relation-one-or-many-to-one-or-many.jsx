import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiabbsb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiabbsb3w"/>`,
		"fallback": "mdi:relation-one-or-many-to-one-or-many",
	});
}

export default Component;
