import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygjwjl6cp.css';
import '../../css/j/j15unt4yn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygjwjl6cp"/><path class="j15unt4yn"/>`,
		"fallback": "devicon:pyscript-wordmark",
	});
}

export default Component;
