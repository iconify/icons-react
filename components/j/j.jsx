import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu63akbrb.css';

const viewBox = {"width":188,"height":917};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu63akbrb"/>`,
		"fallback": "ls:j",
	});
}

export default Component;
