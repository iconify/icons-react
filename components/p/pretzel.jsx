import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq25kzbwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq25kzbwp"/>`,
		"fallback": "thesvg-color:pretzel",
	});
}

export default Component;
