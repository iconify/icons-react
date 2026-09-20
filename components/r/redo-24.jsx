import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqcm5_b6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqcm5_b6z"/>`,
		"fallback": "octicon:redo-24",
	});
}

export default Component;
