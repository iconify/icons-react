import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezj_jlboy.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezj_jlboy"/>`,
		"fallback": "fluent-mdl2:transition-push",
	});
}

export default Component;
