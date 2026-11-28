import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc68r29ja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc68r29ja"/>`,
		"fallback": "iconaut:panel-bottom-solid",
	});
}

export default Component;
