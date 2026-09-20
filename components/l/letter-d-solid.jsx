import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrb84qb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrb84qb-y"/>`,
		"fallback": "mynaui:letter-d-solid",
	});
}

export default Component;
