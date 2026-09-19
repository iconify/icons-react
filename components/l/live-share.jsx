import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6xyl5_4v.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6xyl5_4v"/>`,
		"fallback": "codicon:live-share",
	});
}

export default Component;
