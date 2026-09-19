import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vctk-r6se.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vctk-r6se"/>`,
		"fallback": "f7:multiply-square",
	});
}

export default Component;
