import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf4vrq0tg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf4vrq0tg"/>`,
		"fallback": "keyline-icons:underline",
	});
}

export default Component;
