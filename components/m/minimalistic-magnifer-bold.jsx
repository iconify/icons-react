import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csocnccks.css';
import '../../css/l/llqf1f1jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csocnccks"/><path clip-rule="evenodd" class="llqf1f1jk"/>`,
		"fallback": "solar:minimalistic-magnifer-bold",
	});
}

export default Component;
