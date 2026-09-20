import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aepfsacgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aepfsacgc"/>`,
		"fallback": "reicon:plane2",
	});
}

export default Component;
