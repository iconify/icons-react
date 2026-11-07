import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el80ilbsd.css';
import '../../css/s/s__natbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el80ilbsd"/><path clip-rule="evenodd" class="s__natbch"/>`,
		"fallback": "solar:safe-circle-bold",
	});
}

export default Component;
