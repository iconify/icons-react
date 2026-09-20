import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7c27bb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7c27bb4f"/>`,
		"fallback": "mynaui:play-octagon-solid",
	});
}

export default Component;
