import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw6890bsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw6890bsf"/>`,
		"fallback": "coolicons:trending-up-bulk-round",
	});
}

export default Component;
