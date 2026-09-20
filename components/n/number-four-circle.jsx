import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixot4tbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixot4tbrs"/>`,
		"fallback": "mdi:number-four-circle",
	});
}

export default Component;
