import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thytvacbu.css';

const viewBox = {"width":256,"height":264};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thytvacbu"/>`,
		"fallback": "thesvg-color:laravel",
	});
}

export default Component;
