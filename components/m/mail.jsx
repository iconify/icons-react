import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm9r7-bec.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm9r7-bec"/>`,
		"fallback": "fluent-mdl2:mail",
	});
}

export default Component;
