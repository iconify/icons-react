import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5qbu8lof.css';
import '../../css/c/ca82trbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b5qbu8lof"/><path class="ca82trbjs"/>`,
		"fallback": "mingcute:swimming-pool-fill",
	});
}

export default Component;
