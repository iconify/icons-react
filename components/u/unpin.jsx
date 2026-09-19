import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg_1mgbxp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg_1mgbxp"/>`,
		"fallback": "fluent-mdl2:unpin",
	});
}

export default Component;
