import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa63bdbwq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa63bdbwq"/>`,
		"fallback": "streamline:play-store",
	});
}

export default Component;
