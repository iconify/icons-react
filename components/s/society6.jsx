import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avy6npblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avy6npblp"/>`,
		"fallback": "thesvg-color:society6",
	});
}

export default Component;
