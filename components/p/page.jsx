import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_3-kybfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n_3-kybfz"/>`,
		"fallback": "reicon:page",
	});
}

export default Component;
