import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atf9n8b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atf9n8b3f"/>`,
		"fallback": "token:safe",
	});
}

export default Component;
