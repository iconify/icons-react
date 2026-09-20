import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxjlo2bty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxjlo2bty"/>`,
		"fallback": "mdi:relation-one-to-one-or-many",
	});
}

export default Component;
