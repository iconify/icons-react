import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm0jzlblr.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm0jzlblr"/>`,
		"fallback": "fa:underline",
	});
}

export default Component;
