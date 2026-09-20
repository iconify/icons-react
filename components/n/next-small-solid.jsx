import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx4jh9g-k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx4jh9g-k"/>`,
		"fallback": "teenyicons:next-small-solid",
	});
}

export default Component;
