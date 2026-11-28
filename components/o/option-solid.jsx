import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piopy9w_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="piopy9w_j"/>`,
		"fallback": "iconaut:option-solid",
	});
}

export default Component;
