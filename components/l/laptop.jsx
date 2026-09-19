import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpo11j3ji.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpo11j3ji"/>`,
		"fallback": "fontisto:laptop",
	});
}

export default Component;
