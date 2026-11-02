import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk2vnmbtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk2vnmbtq"/>`,
		"fallback": "mingcute:shoe-line",
	});
}

export default Component;
