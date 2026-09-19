import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xan9nxodn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b xan9nxodn"/>`,
		"fallback": "boxicons:pencil-sparkles",
	});
}

export default Component;
