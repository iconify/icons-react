import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8-vpkbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8-vpkbbq"/>`,
		"fallback": "iconaut:mouse-solid",
	});
}

export default Component;
