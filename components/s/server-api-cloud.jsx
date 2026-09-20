import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk44c3j1d.css';
import '../../css/s/sf98jwb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk44c3j1d"/><path class="sf98jwb3i"/>`,
		"fallback": "streamline-freehand:server-api-cloud",
	});
}

export default Component;
