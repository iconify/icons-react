import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbl7l1byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbl7l1byr"/>`,
		"fallback": "iconaut:tilde-duo",
	});
}

export default Component;
