import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b91ma1vok.css';
import '../../css/v/v7d8v5b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b91ma1vok"/><circle class="v7d8v5b-k"/>`,
		"fallback": "eva:pricetags-outline",
	});
}

export default Component;
