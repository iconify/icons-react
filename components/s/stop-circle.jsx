import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjdjl4z7l.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjdjl4z7l"/>`,
		"fallback": "fa:stop-circle",
	});
}

export default Component;
