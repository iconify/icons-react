import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfa--6bnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfa--6bnr"/>`,
		"fallback": "guidance:mail",
	});
}

export default Component;
