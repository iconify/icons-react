import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh7ko11ac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh7ko11ac"/>`,
		"fallback": "noviair:jar-x",
	});
}

export default Component;
