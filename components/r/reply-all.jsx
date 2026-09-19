import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqa0q9itw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqa0q9itw"/>`,
		"fallback": "fluent-mdl2:reply-all",
	});
}

export default Component;
