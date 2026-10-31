import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li1mz-b2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li1mz-b2a"/>`,
		"fallback": "coolicons:square-dashed-square-round",
	});
}

export default Component;
