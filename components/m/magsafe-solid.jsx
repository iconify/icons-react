import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytzgxbc7q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytzgxbc7q"/>`,
		"fallback": "teenyicons:magsafe-solid",
	});
}

export default Component;
