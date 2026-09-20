import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5xz9zb8a.css';
import '../../css/q/q2qrt1hqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5xz9zb8a"/><path clip-rule="evenodd" class="q2qrt1hqd"/>`,
		"fallback": "token:lpnt",
	});
}

export default Component;
