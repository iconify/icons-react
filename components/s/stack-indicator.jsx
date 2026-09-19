import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4dqrsbwd.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4dqrsbwd"/>`,
		"fallback": "fluent-mdl2:stack-indicator",
	});
}

export default Component;
