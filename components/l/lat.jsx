import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko6i3z5qf.css';
import '../../css/o/oowixtbky.css';
import '../../css/t/tggvt9bno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko6i3z5qf"/><path class="oowixtbky"/><path class="tggvt9bno"/>`,
		"fallback": "token:lat",
	});
}

export default Component;
