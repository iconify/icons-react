import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slmfwd8bu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slmfwd8bu"/>`,
		"fallback": "fluent-mdl2:trending-12",
	});
}

export default Component;
