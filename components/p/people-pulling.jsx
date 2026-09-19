import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwu-aryhz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwu-aryhz"/>`,
		"fallback": "fa7-solid:people-pulling",
	});
}

export default Component;
