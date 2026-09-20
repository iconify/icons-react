import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjjo3sblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjjo3sblt"/>`,
		"fallback": "si:user-alt-4-line",
	});
}

export default Component;
