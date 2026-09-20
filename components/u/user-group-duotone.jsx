import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9wncd_8q.css';
import '../../css/m/mlk-ksb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9wncd_8q"/><path class="mlk-ksb6e"/>`,
		"fallback": "stash:user-group-duotone",
	});
}

export default Component;
