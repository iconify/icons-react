import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3ab64k_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3ab64k_g"/>`,
		"fallback": "tabler:presentation-filled",
	});
}

export default Component;
