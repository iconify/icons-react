import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whza9ob6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whza9ob6g"/>`,
		"fallback": "iconaut:square-split-horizontal-solid",
	});
}

export default Component;
