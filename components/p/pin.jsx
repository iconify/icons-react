import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbelm_byx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbelm_byx"/>`,
		"fallback": "tabler:pin",
	});
}

export default Component;
