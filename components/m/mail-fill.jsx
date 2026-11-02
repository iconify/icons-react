import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xub61jorw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xub61jorw"/>`,
		"fallback": "mingcute:mail-fill",
	});
}

export default Component;
