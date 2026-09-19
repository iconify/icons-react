import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpl7y8bqq.css';
import '../../css/k/kebsqacsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpl7y8bqq"/><path class="kebsqacsd"/>`,
		"fallback": "eva:mic-off-outline",
	});
}

export default Component;
