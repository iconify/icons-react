import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zitu69bjw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zitu69bjw"/>`,
		"fallback": "ep:phone-filled",
	});
}

export default Component;
