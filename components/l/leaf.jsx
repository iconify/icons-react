import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_bzy_bgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_bzy_bgs"/>`,
		"fallback": "mdi:leaf",
	});
}

export default Component;
