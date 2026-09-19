import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnq-f2bnt.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnq-f2bnt"/>`,
		"fallback": "devicon:tigerbeetle-wordmark",
	});
}

export default Component;
