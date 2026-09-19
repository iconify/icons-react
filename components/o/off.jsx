import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akhwoit6v.css';

const viewBox = {"width":660,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akhwoit6v"/>`,
		"fallback": "ls:off",
	});
}

export default Component;
