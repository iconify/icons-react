import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw9659bpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw9659bpe"/>`,
		"fallback": "noviair-light:plane-arrow-up",
	});
}

export default Component;
