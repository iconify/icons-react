import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwbta5htg.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwbta5htg"/>`,
		"fallback": "memory:pike",
	});
}

export default Component;
