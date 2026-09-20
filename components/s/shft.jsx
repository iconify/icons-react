import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcujsn75d.css';
import '../../css/a/a3rqikbuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcujsn75d"/><path class="a3rqikbuq"/>`,
		"fallback": "token:shft",
	});
}

export default Component;
