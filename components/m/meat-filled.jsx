import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thp3xzwhd.css';
import '../../css/e/ez9lk7bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thp3xzwhd"/><path class="ez9lk7bui"/>`,
		"fallback": "boxicons:meat-filled",
	});
}

export default Component;
