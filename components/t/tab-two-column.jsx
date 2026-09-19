import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br176--bo.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br176--bo"/>`,
		"fallback": "fluent-mdl2:tab-two-column",
	});
}

export default Component;
