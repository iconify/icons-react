import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kod4j6bua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kod4j6bua"/>`,
		"fallback": "fe:union",
	});
}

export default Component;
