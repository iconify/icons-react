import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa7kmdd1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa7kmdd1k"/>`,
		"fallback": "mdi:train-bus",
	});
}

export default Component;
