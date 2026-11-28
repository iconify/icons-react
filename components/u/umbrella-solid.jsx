import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o96x5_bdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o96x5_bdw"/>`,
		"fallback": "iconaut:umbrella-solid",
	});
}

export default Component;
