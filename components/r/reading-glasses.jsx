import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szrmdj49d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szrmdj49d"/>`,
		"fallback": "carbon:reading-glasses",
	});
}

export default Component;
