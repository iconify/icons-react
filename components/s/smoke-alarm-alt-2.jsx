import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au88_79si.css';
import '../../css/x/x76_u45ql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au88_79si"/><path class="x76_u45ql"/>`,
		"fallback": "boxicons:smoke-alarm-alt-2",
	});
}

export default Component;
