import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsljz7bgq.css';
import '../../css/b/bgbj2wc5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsljz7bgq"/><path class="bgbj2wc5u"/>`,
		"fallback": "bxs:playlist",
	});
}

export default Component;
