import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tum1hdh1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tum1hdh1x"/>`,
		"fallback": "bxs:planet",
	});
}

export default Component;
