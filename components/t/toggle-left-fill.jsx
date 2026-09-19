import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh5og7tnq.css';
import '../../css/f/f__7awrdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh5og7tnq"/><path class="f__7awrdy"/>`,
		"fallback": "eva:toggle-left-fill",
	});
}

export default Component;
