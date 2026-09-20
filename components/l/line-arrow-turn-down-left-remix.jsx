import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obg_7yb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="obg_7yb7o"/>`,
		"fallback": "streamline-sharp:line-arrow-turn-down-left-remix",
	});
}

export default Component;
