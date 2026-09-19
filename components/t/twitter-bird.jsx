import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du0jn2f1w.css';

const viewBox = {"width":1231.051,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du0jn2f1w"/>`,
		"fallback": "brandico:twitter-bird",
	});
}

export default Component;
