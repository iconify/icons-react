import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgsgssc1q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgsgssc1q"/>`,
		"fallback": "subway:next-1",
	});
}

export default Component;
