import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc-d2sbgq.css';
import '../../css/y/yk-lniigf.css';
import '../../css/b/b3zmgxb9u.css';
import '../../css/j/j4r7oqbtj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc-d2sbgq"/><path class="yk-lniigf"/><path class="b3zmgxb9u"/><path class="j4r7oqbtj"/>`,
		"fallback": "devicon:kibana-wordmark",
	});
}

export default Component;
