import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mih06rbkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mih06rbkj"/>`,
		"fallback": "streamline-sharp:lift-solid",
	});
}

export default Component;
