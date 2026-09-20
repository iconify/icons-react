import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuqt_yb-q.css';
import '../../css/l/ljusak9qu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuqt_yb-q"/><rect class="ljusak9qu"/>`,
		"fallback": "prime:stop-circle",
	});
}

export default Component;
