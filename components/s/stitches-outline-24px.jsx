import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehi1ijv8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehi1ijv8u"/>`,
		"fallback": "healthicons:stitches-outline-24px",
	});
}

export default Component;
