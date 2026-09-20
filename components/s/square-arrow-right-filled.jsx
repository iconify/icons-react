import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2p852bkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2p852bkx"/>`,
		"fallback": "tabler:square-arrow-right-filled",
	});
}

export default Component;
