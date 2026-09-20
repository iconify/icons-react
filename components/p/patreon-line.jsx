import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlbqwq_cl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlbqwq_cl"/>`,
		"fallback": "ri:patreon-line",
	});
}

export default Component;
