import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g27f8y-km.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g27f8y-km"/>`,
		"fallback": "fa7-solid:square-nfi",
	});
}

export default Component;
