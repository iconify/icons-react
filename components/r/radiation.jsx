import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqchobbzt.css';
import '../../css/v/v4i2ew1ke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqchobbzt"/><circle class="v4i2ew1ke"/>`,
		"fallback": "bxs:radiation",
	});
}

export default Component;
