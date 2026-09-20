import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx7tgkbbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx7tgkbbs"/>`,
		"fallback": "thesvg-color:rtlzwei",
	});
}

export default Component;
