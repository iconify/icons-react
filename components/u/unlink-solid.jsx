import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xndbe5z2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xndbe5z2n"/>`,
		"fallback": "mynaui:unlink-solid",
	});
}

export default Component;
