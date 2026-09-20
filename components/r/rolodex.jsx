import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhoum_bma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhoum_bma"/>`,
		"fallback": "mdi:rolodex",
	});
}

export default Component;
