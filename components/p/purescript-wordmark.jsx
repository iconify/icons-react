import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qghqrkb7q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qghqrkb7q"/>`,
		"fallback": "devicon:purescript-wordmark",
	});
}

export default Component;
