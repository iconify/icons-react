import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dneqeub1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dneqeub1b"/>`,
		"fallback": "tabler:square-rounded-check-filled",
	});
}

export default Component;
