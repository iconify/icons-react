import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axqjiccfh.css';
import '../../css/n/nuioz00-q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axqjiccfh"/><path class="nuioz00-q"/>`,
		"fallback": "devicon:stimulus-wordmark",
	});
}

export default Component;
