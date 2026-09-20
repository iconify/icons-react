import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dht-4qb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dht-4qb6i"/>`,
		"fallback": "vadivam:volume",
	});
}

export default Component;
