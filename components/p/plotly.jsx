import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoqkbjeqd.css';
import '../../css/c/cpe-z9b0s.css';
import '../../css/d/dj01mremq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoqkbjeqd"/><path class="cpe-z9b0s"/><path class="dj01mremq"/>`,
		"fallback": "devicon:plotly",
	});
}

export default Component;
