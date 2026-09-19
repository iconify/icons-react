import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhets1rsz.css';
import '../../css/z/zl5kt1bmm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhets1rsz"/><path class="zl5kt1bmm"/>`,
		"fallback": "cil:voice-over-record",
	});
}

export default Component;
