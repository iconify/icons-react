import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwau0o0rk.css';
import '../../css/b/bm85-cegf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwau0o0rk"/><path class="bm85-cegf"/>`,
		"fallback": "streamline-pixel:vintage-phone",
	});
}

export default Component;
