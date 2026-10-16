import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5wxjvy9k.css';
import '../../css/m/mo8aawb0e.css';
import '../../css/l/luei4dbch.css';
import '../../css/d/d8u9wobbs.css';

const viewBox = {"width":87.5,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5wxjvy9k"/><path class="mo8aawb0e"/><path class="luei4dbch"/><path class="d8u9wobbs"/>`,
		"fallback": "thesvg-color:semaphore-ui",
	});
}

export default Component;
