import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gajor1bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gajor1bst"/>`,
		"fallback": "meteor-icons:wave-pulse",
	});
}

export default Component;
