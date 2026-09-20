import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hssezr-nb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hssezr-nb"/>`,
		"fallback": "pinhead:memorial-stone-with-exclamation-point",
	});
}

export default Component;
