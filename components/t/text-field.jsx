import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1lcknb9w.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1lcknb9w"/>`,
		"fallback": "fluent-mdl2:text-field",
	});
}

export default Component;
