import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwc9hobsp.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwc9hobsp"/>`,
		"fallback": "fa:share-alt",
	});
}

export default Component;
