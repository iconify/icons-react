import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq6s0bq6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq6s0bq6z"/>`,
		"fallback": "mdi:manjaro",
	});
}

export default Component;
