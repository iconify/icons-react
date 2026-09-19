import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmdu012ew.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmdu012ew"/>`,
		"fallback": "f7:rotate-left",
	});
}

export default Component;
