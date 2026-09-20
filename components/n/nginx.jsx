import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv3ktebxk.css';
import '../../css/e/eq1ur8_nd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv3ktebxk"/><path class="eq1ur8_nd"/>`,
		"fallback": "thesvg-color:nginx",
	});
}

export default Component;
