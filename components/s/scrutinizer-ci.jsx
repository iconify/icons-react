import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9j5b1edd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9j5b1edd"/>`,
		"fallback": "thesvg:scrutinizer-ci",
	});
}

export default Component;
