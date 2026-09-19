import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weyu_8bon.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="weyu_8bon"/>`,
		"fallback": "fa7-solid:taxi",
	});
}

export default Component;
