import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkeq-6-ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkeq-6-ot"/>`,
		"fallback": "noviair:train-clock",
	});
}

export default Component;
