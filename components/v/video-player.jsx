import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytibtjceb.css';
import '../../css/z/zb00v0bqq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytibtjceb"/><path class="zb00v0bqq"/>`,
		"fallback": "carbon:video-player",
	});
}

export default Component;
