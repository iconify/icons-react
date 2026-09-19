import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgy32l41g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgy32l41g"/>`,
		"fallback": "devicon:qtest-wordmark",
	});
}

export default Component;
