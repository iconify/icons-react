import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnnwnd5sn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnnwnd5sn"/>`,
		"fallback": "carbon:pdf",
	});
}

export default Component;
