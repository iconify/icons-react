import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb918ob3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zb918ob3s"/>`,
		"fallback": "reicon:sort-desc",
	});
}

export default Component;
