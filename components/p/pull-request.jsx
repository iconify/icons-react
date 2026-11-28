import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh0q-lilg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh0q-lilg"/>`,
		"fallback": "noviair-light:pull-request",
	});
}

export default Component;
