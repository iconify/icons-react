import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_-22ibss.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_-22ibss"/>`,
		"fallback": "ix:tasks-all",
	});
}

export default Component;
