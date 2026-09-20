import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7b_bhb3j.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x7b_bhb3j"/>`,
		"fallback": "lineicons:map-pin-5",
	});
}

export default Component;
