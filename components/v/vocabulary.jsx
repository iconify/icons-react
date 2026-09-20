import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgr3gqb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgr3gqb1b"/>`,
		"fallback": "tabler:vocabulary",
	});
}

export default Component;
