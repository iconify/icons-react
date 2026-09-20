import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lty3y1n9z.css';
import '../../css/e/ei-47ebjt.css';
import '../../css/g/gcr3q4b8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lty3y1n9z"/><path class="ei-47ebjt"/><path class="gcr3q4b8s"/>`,
		"fallback": "prime:key",
	});
}

export default Component;
