import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1b0gzbhk.css';
import '../../css/l/lva836zoc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1b0gzbhk"/><path class="lva836zoc"/>`,
		"fallback": "selfhst:typestash-dark",
	});
}

export default Component;
