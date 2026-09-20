import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-rvsvb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-rvsvb_g"/>`,
		"fallback": "streamline-ultimate:maps-bold",
	});
}

export default Component;
