import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuhedbkjt.css';
import '../../css/x/x64jix1xj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuhedbkjt"/><path class="x64jix1xj"/>`,
		"fallback": "tdesign:user-arrow-left-filled",
	});
}

export default Component;
