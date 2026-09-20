import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvf67sgcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvf67sgcd"/>`,
		"fallback": "ri:skip-down-line",
	});
}

export default Component;
