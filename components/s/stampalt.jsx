import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8n9p-9ov.css';

const viewBox = {"width":960,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8n9p-9ov"/>`,
		"fallback": "whh:stampalt",
	});
}

export default Component;
