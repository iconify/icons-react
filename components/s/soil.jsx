import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dty-esq6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dty-esq6p"/>`,
		"fallback": "iconoir:soil",
	});
}

export default Component;
