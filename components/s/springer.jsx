import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-iazk_qb.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-iazk_qb"/>`,
		"fallback": "academicons:springer",
	});
}

export default Component;
