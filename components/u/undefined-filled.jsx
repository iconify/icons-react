import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1qo09e8y.css';
import '../../css/x/xpcfinb2i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1qo09e8y"/><path class="xpcfinb2i"/>`,
		"fallback": "carbon:undefined-filled",
	});
}

export default Component;
