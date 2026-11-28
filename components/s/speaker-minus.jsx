import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjhc1sbbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjhc1sbbd"/>`,
		"fallback": "noviair-light:speaker-minus",
	});
}

export default Component;
