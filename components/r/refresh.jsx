import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0y7rc81h.css';
import '../../css/s/s-i43gbfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0y7rc81h"/><path class="s-i43gbfr"/>`,
		"fallback": "prime:refresh",
	});
}

export default Component;
