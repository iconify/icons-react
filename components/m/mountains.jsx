import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jid_jxb4p.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jid_jxb4p"/>`,
		"fallback": "foundation:mountains",
	});
}

export default Component;
