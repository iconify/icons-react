import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdjkkacjd.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdjkkacjd"/>`,
		"fallback": "fluent-mdl2:processing-cancel",
	});
}

export default Component;
