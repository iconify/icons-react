import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-_lt1cjq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-_lt1cjq"/>`,
		"fallback": "fluent-mdl2:timeline-matrix-view",
	});
}

export default Component;
