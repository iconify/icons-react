import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9nods1ru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9nods1ru"/>`,
		"fallback": "mingcute:shoe-line",
	});
}

export default Component;
