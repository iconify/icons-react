import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlrspib7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlrspib7a"/>`,
		"fallback": "noviair:pizza",
	});
}

export default Component;
