import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6vjloltc.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6vjloltc"/>`,
		"fallback": "wi:moon-2",
	});
}

export default Component;
