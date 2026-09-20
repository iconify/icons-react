import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2n4pmoob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2n4pmoob"/>`,
		"fallback": "tdesign:tree-round-dot-filled",
	});
}

export default Component;
