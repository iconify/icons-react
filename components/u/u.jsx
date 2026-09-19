import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcki-tajv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcki-tajv"/>`,
		"fallback": "fa7-solid:u",
	});
}

export default Component;
