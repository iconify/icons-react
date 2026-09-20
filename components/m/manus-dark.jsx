import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whhmhlbyr.css';

const viewBox = {"width":60,"height":60};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="whhmhlbyr"/>`,
		"fallback": "thesvg-color:manus-dark",
	});
}

export default Component;
