import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdn6t9hua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdn6t9hua"/>`,
		"fallback": "reicon:laptop2-filled",
	});
}

export default Component;
