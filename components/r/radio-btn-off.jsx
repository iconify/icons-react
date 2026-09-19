import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdyo0kb6l.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdyo0kb6l"/>`,
		"fallback": "fluent-mdl2:radio-btn-off",
	});
}

export default Component;
