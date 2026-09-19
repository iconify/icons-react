import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orz84zbwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orz84zbwb"/>`,
		"fallback": "bitcoin-icons:split-filled",
	});
}

export default Component;
