import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtnj1pydm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtnj1pydm"/>`,
		"fallback": "streamline-ultimate:vectors-anchor-rectangle-bold",
	});
}

export default Component;
