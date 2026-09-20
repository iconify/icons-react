import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc7o19beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc7o19beq"/>`,
		"fallback": "tabler:number-80-small",
	});
}

export default Component;
