import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf7eihhbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf7eihhbk"/>`,
		"fallback": "uis:step-forward",
	});
}

export default Component;
