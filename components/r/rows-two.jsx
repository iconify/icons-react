import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbb_oabdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbb_oabdf"/>`,
		"fallback": "griddy-icons:rows-two",
	});
}

export default Component;
