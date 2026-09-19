import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr8m7obju.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr8m7obju"/>`,
		"fallback": "fluent-mdl2:plan-view",
	});
}

export default Component;
