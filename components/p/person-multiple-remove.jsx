import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unfsb6a4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unfsb6a4j"/>`,
		"fallback": "mdi:person-multiple-remove",
	});
}

export default Component;
