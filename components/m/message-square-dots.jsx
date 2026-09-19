import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6yrju2ef.css';
import '../../css/o/opsksqbxj.css';
import '../../css/v/vn4va-blz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6yrju2ef"/><circle class="opsksqbxj"/><circle class="vn4va-blz"/>`,
		"fallback": "bx:message-square-dots",
	});
}

export default Component;
