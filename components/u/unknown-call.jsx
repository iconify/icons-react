import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ormd75vrg.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ormd75vrg"/>`,
		"fallback": "fluent-mdl2:unknown-call",
	});
}

export default Component;
