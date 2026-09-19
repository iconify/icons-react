import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i72_afoiz.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i72_afoiz"/>`,
		"fallback": "el:universal-access",
	});
}

export default Component;
