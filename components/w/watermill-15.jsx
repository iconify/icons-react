import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sug3ijbzr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sug3ijbzr"/>`,
		"fallback": "maki:watermill-15",
	});
}

export default Component;
