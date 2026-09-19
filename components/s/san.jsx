import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xanx3t_bq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xanx3t_bq"/>`,
		"fallback": "cryptocurrency:san",
	});
}

export default Component;
