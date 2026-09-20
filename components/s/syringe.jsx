import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1rbu7bek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t1rbu7bek"/>`,
		"fallback": "reicon:syringe",
	});
}

export default Component;
