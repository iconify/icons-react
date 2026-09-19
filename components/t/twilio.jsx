import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch5-mcp-c.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch5-mcp-c"/>`,
		"fallback": "devicon:twilio",
	});
}

export default Component;
