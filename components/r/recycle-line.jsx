import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxstpd27x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxstpd27x"/>`,
		"fallback": "mingcute:recycle-line",
	});
}

export default Component;
