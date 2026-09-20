import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we_6prbbh.css';
import '../../css/c/ck8dpqbtj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we_6prbbh"/><path clip-rule="evenodd" class="ck8dpqbtj"/>`,
		"fallback": "qlementine-icons:question-12",
	});
}

export default Component;
