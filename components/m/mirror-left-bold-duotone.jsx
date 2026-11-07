import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puwao6b5b.css';
import '../../css/j/jcvro1hvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puwao6b5b"/><path clip-rule="evenodd" class="jcvro1hvo"/>`,
		"fallback": "solar:mirror-left-bold-duotone",
	});
}

export default Component;
