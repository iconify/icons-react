import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylfm_3b3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylfm_3b3g"/>`,
		"fallback": "mynaui:planet",
	});
}

export default Component;
