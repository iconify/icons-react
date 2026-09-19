import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2sfl7j_p.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2sfl7j_p"/>`,
		"fallback": "fa:smile-o",
	});
}

export default Component;
