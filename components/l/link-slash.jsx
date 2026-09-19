import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcmq74bdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcmq74bdm"/>`,
		"fallback": "heroicons:link-slash",
	});
}

export default Component;
