import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb7ny-b9u.css';
import '../../css/y/yebjw07xb.css';
import '../../css/y/yf53kj02n.css';
import '../../css/w/w871p5tnp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb7ny-b9u"/><path class="yebjw07xb"/><path class="yf53kj02n"/><path class="w871p5tnp"/>`,
		"fallback": "fxemoji:runningshirt",
	});
}

export default Component;
