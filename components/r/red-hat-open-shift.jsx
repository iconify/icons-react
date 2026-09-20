import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk3l2gykm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk3l2gykm"/>`,
		"fallback": "thesvg-color:red-hat-open-shift",
	});
}

export default Component;
