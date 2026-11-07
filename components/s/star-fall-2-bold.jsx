import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvrwd2b_b.css';
import '../../css/f/f-cbj-b0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvrwd2b_b"/><path class="f-cbj-b0t"/>`,
		"fallback": "solar:star-fall-2-bold",
	});
}

export default Component;
