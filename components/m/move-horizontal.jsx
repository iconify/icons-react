import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf9kpubxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf9kpubxw"/>`,
		"fallback": "andrsrxn:move-horizontal",
	});
}

export default Component;
