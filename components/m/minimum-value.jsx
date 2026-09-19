import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh-00ibey.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh-00ibey"/>`,
		"fallback": "fluent-mdl2:minimum-value",
	});
}

export default Component;
