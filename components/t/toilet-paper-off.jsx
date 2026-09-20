import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th_w9mbqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th_w9mbqn"/>`,
		"fallback": "tabler:toilet-paper-off",
	});
}

export default Component;
