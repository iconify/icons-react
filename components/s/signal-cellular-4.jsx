import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyl1b_bqt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyl1b_bqt"/>`,
		"fallback": "cil:signal-cellular-4",
	});
}

export default Component;
