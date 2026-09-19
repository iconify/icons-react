import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg7n2eb4u.css';

const viewBox = {"width":182,"height":981};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg7n2eb4u"/>`,
		"fallback": "ls:parenright",
	});
}

export default Component;
