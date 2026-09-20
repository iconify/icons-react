import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2t895bmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t2t895bmj"/>`,
		"fallback": "si:json-alt-3-fill",
	});
}

export default Component;
