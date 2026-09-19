import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4vvvyndn.css';
import '../../css/l/lrvq4dd-h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4vvvyndn"/><path class="lrvq4dd-h"/>`,
		"fallback": "devicon:scala-wordmark",
	});
}

export default Component;
