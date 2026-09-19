import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7_ef0bll.css';
import '../../css/w/ww0v738xa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7_ef0bll"/><path class="ww0v738xa"/>`,
		"fallback": "carbon:operation-gauge",
	});
}

export default Component;
