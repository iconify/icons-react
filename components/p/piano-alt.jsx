import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv6rrcc7g.css';
import '../../css/b/b7pa4ebgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv6rrcc7g"/><path class="b7pa4ebgy"/>`,
		"fallback": "boxicons:piano-alt",
	});
}

export default Component;
