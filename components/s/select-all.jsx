import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj20lfckz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj20lfckz"/>`,
		"fallback": "fluent-mdl2:select-all",
	});
}

export default Component;
