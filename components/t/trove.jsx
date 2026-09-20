import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prcfn4-rn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prcfn4-rn"/>`,
		"fallback": "thesvg-color:trove",
	});
}

export default Component;
