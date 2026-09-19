import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un5oheb6g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un5oheb6g"/>`,
		"fallback": "fluent-emoji-high-contrast:t-shirt",
	});
}

export default Component;
