import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkv75fisb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkv75fisb"/>`,
		"fallback": "carbon:tornado",
	});
}

export default Component;
