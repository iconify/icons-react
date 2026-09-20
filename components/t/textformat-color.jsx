import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa1o9kgqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa1o9kgqy"/>`,
		"fallback": "tdesign:textformat-color",
	});
}

export default Component;
