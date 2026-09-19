import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq_b7uk2m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq_b7uk2m"/>`,
		"fallback": "fluent-mdl2:upgrade-analysis",
	});
}

export default Component;
