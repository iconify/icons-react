import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd9t-4b_w.css';
import '../../css/v/vixdv7vsx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd9t-4b_w"/><path class="vixdv7vsx"/>`,
		"fallback": "garden:record-20",
	});
}

export default Component;
