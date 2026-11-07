import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkzge6j-e.css';
import '../../css/j/jd1l75b7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mkzge6j-e"/><path class="jd1l75b7y"/>`,
		"fallback": "solar:key-square-2-bold",
	});
}

export default Component;
