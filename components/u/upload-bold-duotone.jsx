import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c26kd0bsp.css';
import '../../css/z/zebewq1gn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c26kd0bsp"/><path clip-rule="evenodd" class="zebewq1gn"/>`,
		"fallback": "solar:upload-bold-duotone",
	});
}

export default Component;
