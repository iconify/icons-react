import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg21hfbqv.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg21hfbqv"/>`,
		"fallback": "fluent-mdl2:thumbnail-view",
	});
}

export default Component;
