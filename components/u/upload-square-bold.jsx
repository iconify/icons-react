import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzl_0yb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mzl_0yb5w"/>`,
		"fallback": "solar:upload-square-bold",
	});
}

export default Component;
