import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze8c43b-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze8c43b-b"/>`,
		"fallback": "uil:play-circle",
	});
}

export default Component;
