import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zknk9gucc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zknk9gucc"/>`,
		"fallback": "garden:thumbs-down-stroke-20",
	});
}

export default Component;
