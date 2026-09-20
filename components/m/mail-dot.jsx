import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltua8abtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltua8abtk"/>`,
		"fallback": "keyline-icons:mail-dot",
	});
}

export default Component;
