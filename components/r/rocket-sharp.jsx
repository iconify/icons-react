import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg9g-ctoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg9g-ctoq"/>`,
		"fallback": "keyline-icons:rocket-sharp",
	});
}

export default Component;
