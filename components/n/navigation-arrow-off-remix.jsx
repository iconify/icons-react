import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpelxac7x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kpelxac7x"/>`,
		"fallback": "streamline:navigation-arrow-off-remix",
	});
}

export default Component;
