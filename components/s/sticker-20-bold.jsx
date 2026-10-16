import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgevkmbzk.css';
import '../../css/b/bwnp5t_qt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgevkmbzk"/><path class="bwnp5t_qt"/>`,
		"fallback": "energy-icons:sticker-20-bold",
	});
}

export default Component;
