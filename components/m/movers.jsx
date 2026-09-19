import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm6a2xbzo.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm6a2xbzo"/>`,
		"fallback": "fluent-mdl2:movers",
	});
}

export default Component;
