import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwg2pfb7j.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwg2pfb7j"/>`,
		"fallback": "fluent-mdl2:snow",
	});
}

export default Component;
