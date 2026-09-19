import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxc0abc3g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxc0abc3g"/>`,
		"fallback": "carbon:number-small-8",
	});
}

export default Component;
