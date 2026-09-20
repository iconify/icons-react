import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yeplgj_ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yeplgj_ot"/>`,
		"fallback": "tabler:shape-off",
	});
}

export default Component;
