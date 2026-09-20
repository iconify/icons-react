import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4y5y6blb.css';
import '../../css/n/nor-6jbxu.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v4y5y6blb"/><path class="nor-6jbxu"/>`,
		"fallback": "lineicons:star-fat-half-2",
	});
}

export default Component;
