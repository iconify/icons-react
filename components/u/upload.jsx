import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cku-a-_in.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cku-a-_in"/>`,
		"fallback": "feather:upload",
	});
}

export default Component;
