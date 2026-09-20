import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqut9yb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqut9yb6v"/>`,
		"fallback": "mage:ribbon-fill",
	});
}

export default Component;
