import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okz34ybum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okz34ybum"/>`,
		"fallback": "thesvg:turkish-airlines",
	});
}

export default Component;
