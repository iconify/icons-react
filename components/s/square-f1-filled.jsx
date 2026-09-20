import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrsr8rlmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrsr8rlmm"/>`,
		"fallback": "tabler:square-f1-filled",
	});
}

export default Component;
