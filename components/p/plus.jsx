import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/c/celmyq.css';
import '../../css/q/qbipjn.css';
import '../../css/s/so-from-16.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c celmyq"/><path class="a0m25c qbipjn"/>`,
		"fallback": "line-md:plus",
	});
}

export default Component;
