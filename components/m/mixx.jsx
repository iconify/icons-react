import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cki059bqf.css';

const viewBox = {"width":360,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cki059bqf"/>`,
		"fallback": "ps:mixx",
	});
}

export default Component;
