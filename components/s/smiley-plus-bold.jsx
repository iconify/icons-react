import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnw1wt3zy.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnw1wt3zy"/>`,
		"fallback": "pullo:smiley-plus-bold",
	});
}

export default Component;
