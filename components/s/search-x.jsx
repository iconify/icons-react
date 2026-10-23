import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbnm49bao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbnm49bao"/>`,
		"fallback": "vadivam:search-x",
	});
}

export default Component;
