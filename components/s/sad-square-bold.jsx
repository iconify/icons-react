import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-dt9b8vl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v-dt9b8vl"/>`,
		"fallback": "solar:sad-square-bold",
	});
}

export default Component;
