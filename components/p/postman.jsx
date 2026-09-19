import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6n-h328k.css';
import '../../css/r/rjwj9migx.css';
import '../../css/d/domzjoixq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6n-h328k"/><path class="rjwj9migx"/><path class="domzjoixq"/>`,
		"fallback": "devicon:postman",
	});
}

export default Component;
