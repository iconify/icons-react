import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slxfccb9c.css';
import '../../css/n/nmf1tu78z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slxfccb9c"/><path class="nmf1tu78z"/>`,
		"fallback": "mingcute:settings-3-line",
	});
}

export default Component;
