import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj_u7vbcr.css';
import '../../css/x/xgapgabzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj_u7vbcr"/><path class="xgapgabzz"/>`,
		"fallback": "token:musd",
	});
}

export default Component;
