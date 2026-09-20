import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptywf4b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptywf4b3b"/>`,
		"fallback": "mynaui:slash-circle",
	});
}

export default Component;
