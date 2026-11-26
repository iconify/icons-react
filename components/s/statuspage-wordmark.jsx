import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr24xacoy.css';
import '../../css/e/etdr-zbkq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr24xacoy"/><path class="etdr-zbkq"/>`,
		"fallback": "devicon:statuspage-wordmark",
	});
}

export default Component;
