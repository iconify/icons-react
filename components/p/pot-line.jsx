import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiwy10b8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiwy10b8q"/>`,
		"fallback": "mingcute:pot-line",
	});
}

export default Component;
