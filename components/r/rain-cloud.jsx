import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9gy4gb7p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9gy4gb7p"/>`,
		"fallback": "streamline:rain-cloud",
	});
}

export default Component;
