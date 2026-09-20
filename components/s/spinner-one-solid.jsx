import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvbfs2b4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvbfs2b4m"/>`,
		"fallback": "mynaui:spinner-one-solid",
	});
}

export default Component;
