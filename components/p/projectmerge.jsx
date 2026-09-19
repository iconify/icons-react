import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2owwnbsq.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2owwnbsq"/>`,
		"fallback": "whh:projectmerge",
	});
}

export default Component;
