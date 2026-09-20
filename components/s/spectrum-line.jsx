import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqq92b05g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqq92b05g"/>`,
		"fallback": "ri:spectrum-line",
	});
}

export default Component;
