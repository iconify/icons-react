import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpqc5vbcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpqc5vbcv"/>`,
		"fallback": "iconaut:money-bag-solid",
	});
}

export default Component;
