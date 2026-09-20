import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bph8-725u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bph8-725u"/>`,
		"fallback": "tabler:signal-6g",
	});
}

export default Component;
