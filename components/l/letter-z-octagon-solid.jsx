import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxsabke1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxsabke1s"/>`,
		"fallback": "mynaui:letter-z-octagon-solid",
	});
}

export default Component;
