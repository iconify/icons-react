import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4tpa7b5j.css';
import '../../css/q/qa5889vlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b4tpa7b5j"/><path class="qa5889vlx"/>`,
		"fallback": "solar:mirror-right-bold",
	});
}

export default Component;
