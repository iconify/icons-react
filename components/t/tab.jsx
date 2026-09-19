import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqdxu6b_p.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqdxu6b_p"/>`,
		"fallback": "fluent-mdl2:tab",
	});
}

export default Component;
