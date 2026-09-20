import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbga4bbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbga4bbsa"/>`,
		"fallback": "mdi:relation-many-to-zero-or-one",
	});
}

export default Component;
