import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvt4d9b3f.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvt4d9b3f"/>`,
		"fallback": "fluent-mdl2:sentiment-analysis",
	});
}

export default Component;
