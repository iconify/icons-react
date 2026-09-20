import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovf3rrb-n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ovf3rrb-n"/>`,
		"fallback": "streamline-flex:lightbulb-remix",
	});
}

export default Component;
