import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwrh_yukk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwrh_yukk"/>`,
		"fallback": "noviair-light:plate",
	});
}

export default Component;
