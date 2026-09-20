import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-0aw-32q.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-0aw-32q"/>`,
		"fallback": "picon:toilet",
	});
}

export default Component;
