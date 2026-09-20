import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob6wv6w5p.css';
import '../../css/o/olze3bcsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob6wv6w5p"/><path clip-rule="evenodd" class="olze3bcsd"/>`,
		"fallback": "lineicons:stopwatch",
	});
}

export default Component;
