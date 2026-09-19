import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jteem_bxc.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jteem_bxc"/>`,
		"fallback": "fluent-mdl2:numbered-list-text",
	});
}

export default Component;
