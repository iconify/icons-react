import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu8cdcbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu8cdcbde"/>`,
		"fallback": "mdi:party-popper",
	});
}

export default Component;
