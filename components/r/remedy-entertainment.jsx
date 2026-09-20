import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vthu1k3km.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vthu1k3km"/>`,
		"fallback": "thesvg:remedy-entertainment",
	});
}

export default Component;
