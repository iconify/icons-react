import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcj_yebfb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcj_yebfb"/>`,
		"fallback": "fluent-mdl2:suitcase",
	});
}

export default Component;
