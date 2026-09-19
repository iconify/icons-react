import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp89m8b4q.css';

const viewBox = {"width":512,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp89m8b4q"/>`,
		"fallback": "ps:upload-to-cloud",
	});
}

export default Component;
