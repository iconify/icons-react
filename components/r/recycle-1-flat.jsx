import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvu0--6-s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bvu0--6-s"/>`,
		"fallback": "streamline-color:recycle-1-flat",
	});
}

export default Component;
