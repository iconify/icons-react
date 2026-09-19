import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv5lx9b-t.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv5lx9b-t"/>`,
		"fallback": "fluent-mdl2:volume-1",
	});
}

export default Component;
