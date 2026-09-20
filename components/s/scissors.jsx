import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj9mas2wf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj9mas2wf"/>`,
		"fallback": "tabler:scissors",
	});
}

export default Component;
