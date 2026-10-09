import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0oe2vbzu.css';
import '../../css/z/zijqf-s4l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0oe2vbzu"/><path class="zijqf-s4l"/>`,
		"fallback": "energy-icons:rss-20-bold",
	});
}

export default Component;
