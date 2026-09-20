import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6fgm95al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6fgm95al"/>`,
		"fallback": "mynaui:two-octagon-solid",
	});
}

export default Component;
