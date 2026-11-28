import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qircv0fuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qircv0fuk"/>`,
		"fallback": "noviair-light:pill-check",
	});
}

export default Component;
