import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amo1dubnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amo1dubnj"/>`,
		"fallback": "iconaut:person-walking-solid",
	});
}

export default Component;
