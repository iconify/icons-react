import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aapds4maj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aapds4maj"/>`,
		"fallback": "coolicons:link-horizontal-off-fill-round",
	});
}

export default Component;
