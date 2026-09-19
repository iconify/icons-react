import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oea5h3b3e.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oea5h3b3e"/>`,
		"fallback": "fluent-mdl2:learning-tools",
	});
}

export default Component;
