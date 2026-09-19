import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm6s_5b-p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm6s_5b-p"/>`,
		"fallback": "carbon:number-small-3",
	});
}

export default Component;
