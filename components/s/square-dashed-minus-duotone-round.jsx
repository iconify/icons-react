import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sds54fboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sds54fboe"/>`,
		"fallback": "coolicons:square-dashed-minus-duotone-round",
	});
}

export default Component;
