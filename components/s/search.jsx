import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btmjm1yxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btmjm1yxw"/>`,
		"fallback": "griddy-icons:search",
	});
}

export default Component;
