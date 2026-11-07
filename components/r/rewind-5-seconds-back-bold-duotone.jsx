import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gekq4yo7t.css';
import '../../css/i/i7qoswbip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gekq4yo7t"/><path clip-rule="evenodd" class="i7qoswbip"/>`,
		"fallback": "solar:rewind-5-seconds-back-bold-duotone",
	});
}

export default Component;
