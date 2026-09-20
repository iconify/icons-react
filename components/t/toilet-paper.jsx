import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6s1n5b5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6s1n5b5w"/>`,
		"fallback": "uil:toilet-paper",
	});
}

export default Component;
