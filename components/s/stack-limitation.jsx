import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hojfg4bzg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hojfg4bzg"/>`,
		"fallback": "carbon:stack-limitation",
	});
}

export default Component;
