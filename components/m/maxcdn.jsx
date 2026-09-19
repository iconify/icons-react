import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r313nlbao.css';

const viewBox = {"width":33,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r313nlbao"/>`,
		"fallback": "fontisto:maxcdn",
	});
}

export default Component;
