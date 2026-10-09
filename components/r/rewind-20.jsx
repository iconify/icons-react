import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2dd3q7hq.css';
import '../../css/m/msgtlpbua.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2dd3q7hq"/><path class="msgtlpbua"/>`,
		"fallback": "energy-icons:rewind-20",
	});
}

export default Component;
