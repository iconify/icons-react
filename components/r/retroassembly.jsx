import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx7mr1bdl.css';
import '../../css/z/zp52ksh9z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="wx7mr1bdl"/><path class="zp52ksh9z"/>`,
		"fallback": "selfhst:retroassembly",
	});
}

export default Component;
