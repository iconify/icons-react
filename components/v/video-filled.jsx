import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p7spppbyw.css';
import '../../css/v/vutvmustt.css';
import '../../css/k/kb5c4o9xz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="p7spppbyw"/><rect class="vutvmustt"/><path class="kb5c4o9xz"/></g>`,
		"fallback": "andrsrxn:video-filled",
	});
}

export default Component;
