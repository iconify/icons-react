import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlqmvvj_g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlqmvvj_g"/>`,
		"fallback": "streamline:sleep",
	});
}

export default Component;
