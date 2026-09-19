import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz8bt4e6a.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz8bt4e6a"/>`,
		"fallback": "fluent-mdl2:news-search",
	});
}

export default Component;
