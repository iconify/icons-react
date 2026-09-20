import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc5zs_rrj.css';
import '../../css/d/da75vnbxo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc5zs_rrj"/><path class="da75vnbxo"/>`,
		"fallback": "openmoji:star",
	});
}

export default Component;
