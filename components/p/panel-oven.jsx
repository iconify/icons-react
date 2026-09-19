import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbon7ib7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbon7ib7m"/>`,
		"fallback": "cbi:panel-oven",
	});
}

export default Component;
