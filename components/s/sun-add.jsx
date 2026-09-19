import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8d08acoq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8d08acoq"/>`,
		"fallback": "fluent-mdl2:sun-add",
	});
}

export default Component;
