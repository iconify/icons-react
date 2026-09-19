import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x579hjb9j.css';
import '../../css/a/ad8vvnbjm.css';
import '../../css/j/j1dztmbls.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x579hjb9j"/><path class="ad8vvnbjm"/><path class="j1dztmbls"/>`,
		"fallback": "devicon:postman-wordmark",
	});
}

export default Component;
