import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq4k6swtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq4k6swtf"/>`,
		"fallback": "ri:issues-reopen-fill",
	});
}

export default Component;
