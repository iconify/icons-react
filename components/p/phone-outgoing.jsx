import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggljjvbkh.css';
import '../../css/s/s0ff9zwpj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggljjvbkh"/><path class="s0ff9zwpj"/>`,
		"fallback": "carbon:phone-outgoing",
	});
}

export default Component;
