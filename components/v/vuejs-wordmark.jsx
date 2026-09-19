import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsyhdhbom.css';
import '../../css/m/m1jkf5b-x.css';
import '../../css/u/u72v5m6oj.css';
import '../../css/u/uba14cccu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsyhdhbom"/><path class="m1jkf5b-x"/><path class="u72v5m6oj"/><path class="uba14cccu"/>`,
		"fallback": "devicon:vuejs-wordmark",
	});
}

export default Component;
