import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je16lsbim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je16lsbim"/>`,
		"fallback": "thesvg-color:travis-ci",
	});
}

export default Component;
