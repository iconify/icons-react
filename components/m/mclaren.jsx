import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvso6ibvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvso6ibvx"/>`,
		"fallback": "thesvg-color:mclaren",
	});
}

export default Component;
