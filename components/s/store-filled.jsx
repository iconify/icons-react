import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfwzn80jq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfwzn80jq"/>`,
		"fallback": "tdesign:store-filled",
	});
}

export default Component;
