import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8n6hxosg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b8n6hxosg"/>`,
		"fallback": "pajamas:status-waiting",
	});
}

export default Component;
