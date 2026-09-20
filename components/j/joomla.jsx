import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-_4f0s3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-_4f0s3x"/>`,
		"fallback": "thesvg-color:joomla",
	});
}

export default Component;
