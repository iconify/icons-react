import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t09dwgwot.css';
import '../../css/z/zc4v9w_9s.css';
import '../../css/p/p57ho085m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t09dwgwot"/><path class="zc4v9w_9s"/><path class="p57ho085m"/>`,
		"fallback": "devicon:numpy-wordmark",
	});
}

export default Component;
