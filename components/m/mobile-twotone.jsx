import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0vdt7_4y.css';
import '../../css/z/zgf90ac7u.css';
import '../../css/v/vaqg0pb0u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0vdt7_4y"/><path class="zgf90ac7u"/><path class="vaqg0pb0u"/>`,
		"fallback": "ant-design:mobile-twotone",
	});
}

export default Component;
