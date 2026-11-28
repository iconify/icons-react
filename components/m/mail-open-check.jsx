import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnrfv2bbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnrfv2bbn"/>`,
		"fallback": "noviair-light:mail-open-check",
	});
}

export default Component;
