import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4vks8bow.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4vks8bow"/>`,
		"fallback": "streamline:outgoing-call",
	});
}

export default Component;
