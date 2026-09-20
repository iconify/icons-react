import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meac7un-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="meac7un-o"/>`,
		"fallback": "thesvg-color:mendeley",
	});
}

export default Component;
