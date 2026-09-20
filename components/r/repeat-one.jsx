import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxlx4zb0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zxlx4zb0s"/>`,
		"fallback": "reicon:repeat-one",
	});
}

export default Component;
