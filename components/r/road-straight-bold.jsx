import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0g3k3bwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0g3k3bwv"/>`,
		"fallback": "streamline-ultimate:road-straight-bold",
	});
}

export default Component;
