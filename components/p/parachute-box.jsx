import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t95mokb9x.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t95mokb9x"/>`,
		"fallback": "fa7-solid:parachute-box",
	});
}

export default Component;
