import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wba5tcc0y.css';
import '../../css/n/nm-b5odlu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wba5tcc0y"/><path class="nm-b5odlu"/>`,
		"fallback": "eva:shuffle-outline",
	});
}

export default Component;
