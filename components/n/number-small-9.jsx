import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p54ufnf5x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p54ufnf5x"/>`,
		"fallback": "carbon:number-small-9",
	});
}

export default Component;
