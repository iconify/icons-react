import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq7v8iwzd.css';

const viewBox = {"width":1536,"height":1504};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq7v8iwzd"/>`,
		"fallback": "fa:linkedin",
	});
}

export default Component;
