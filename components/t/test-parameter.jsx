import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npql1nbcm.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npql1nbcm"/>`,
		"fallback": "fluent-mdl2:test-parameter",
	});
}

export default Component;
