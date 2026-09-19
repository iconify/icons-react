import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyt7w2bqm.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyt7w2bqm"/>`,
		"fallback": "fluent-mdl2:pin",
	});
}

export default Component;
