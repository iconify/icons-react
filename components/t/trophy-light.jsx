import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq532vbvh.css';
import '../../css/r/r-nejf7ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq532vbvh"/><path class="r-nejf7ot"/>`,
		"fallback": "stash:trophy-light",
	});
}

export default Component;
