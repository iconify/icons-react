import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhl3z13hj.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhl3z13hj"/>`,
		"fallback": "fluent-mdl2:mark-down-language",
	});
}

export default Component;
