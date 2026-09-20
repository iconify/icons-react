import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzkpf5bsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yzkpf5bsr"/>`,
		"fallback": "solar:rewind-back-outline",
	});
}

export default Component;
