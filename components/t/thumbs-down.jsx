import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/r00rtgbnl.css';
import '../../css/j/josxptbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="r00rtgbnl"/><path class="josxptbhy"/></g>`,
		"fallback": "matita:thumbs-down",
	});
}

export default Component;
