import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9skdhbhr.css';
import '../../css/m/mg5nb2b6y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9skdhbhr"/><path class="mg5nb2b6y"/>`,
		"fallback": "devicon:swagger-wordmark",
	});
}

export default Component;
