import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp-3b16-x.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp-3b16-x"/>`,
		"fallback": "devicon-plain:kotlin-wordmark",
	});
}

export default Component;
