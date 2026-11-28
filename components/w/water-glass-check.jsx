import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv1_vybbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv1_vybbv"/>`,
		"fallback": "noviair-light:water-glass-check",
	});
}

export default Component;
