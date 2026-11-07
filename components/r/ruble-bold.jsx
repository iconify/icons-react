import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcuss6sft.css';
import '../../css/a/arfojkbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcuss6sft"/><path clip-rule="evenodd" class="arfojkbpr"/>`,
		"fallback": "solar:ruble-bold",
	});
}

export default Component;
