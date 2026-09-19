import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6d3_fr3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6d3_fr3d"/>`,
		"fallback": "hugeicons:rss-locked",
	});
}

export default Component;
