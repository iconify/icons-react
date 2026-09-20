import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg9ihxbsk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg9ihxbsk"/>`,
		"fallback": "lsicon:paste-outline",
	});
}

export default Component;
