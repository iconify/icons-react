import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi05xubmo.css';
import '../../css/a/a2uu82b7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yi05xubmo"/><path clip-rule="evenodd" class="a2uu82b7g"/>`,
		"fallback": "cuida:undo-outline",
	});
}

export default Component;
