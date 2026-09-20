import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8lc7zb3l.css';
import '../../css/n/nc55f-bpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8lc7zb3l"/><path clip-rule="evenodd" class="nc55f-bpk"/>`,
		"fallback": "qlementine-icons:minus-circle-24",
	});
}

export default Component;
