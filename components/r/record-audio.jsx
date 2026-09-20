import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a15vrjyzh.css';
import '../../css/f/fwgabzb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="a15vrjyzh"/><path class="fwgabzb5n"/>`,
		"fallback": "uim:record-audio",
	});
}

export default Component;
