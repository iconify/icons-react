import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz__5zbvx.css';
import '../../css/j/jflyr3bcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bz__5zbvx"/><path class="jflyr3bcg"/>`,
		"fallback": "solar:ufo-bold",
	});
}

export default Component;
