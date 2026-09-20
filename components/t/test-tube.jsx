import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykwimr7ks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykwimr7ks"/>`,
		"fallback": "keyline-icons:test-tube",
	});
}

export default Component;
