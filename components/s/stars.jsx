import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1f-ugyov.css';
import '../../css/r/r6-wpcu2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1f-ugyov"/><path class="r6-wpcu2w"/>`,
		"fallback": "token:stars",
	});
}

export default Component;
