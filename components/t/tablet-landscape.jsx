import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8ctqoumq.css';
import '../../css/e/e5-idrbop.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8ctqoumq"/><path class="e5-idrbop"/>`,
		"fallback": "carbon:tablet-landscape",
	});
}

export default Component;
