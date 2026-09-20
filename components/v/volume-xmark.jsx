import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrr9o3jlh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrr9o3jlh"/>`,
		"fallback": "meteor-icons:volume-xmark",
	});
}

export default Component;
