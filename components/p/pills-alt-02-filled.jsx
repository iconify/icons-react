import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e32pzmbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e32pzmbzj"/>`,
		"fallback": "griddy-icons:pills-alt-02-filled",
	});
}

export default Component;
