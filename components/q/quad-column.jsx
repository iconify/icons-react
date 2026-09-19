import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dganmeb6t.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dganmeb6t"/>`,
		"fallback": "fluent-mdl2:quad-column",
	});
}

export default Component;
