import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6eec_-wn.css';
import '../../css/f/f-uh8goxk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6eec_-wn"/><path class="f-uh8goxk"/>`,
		"fallback": "ant-design:trophy-twotone",
	});
}

export default Component;
