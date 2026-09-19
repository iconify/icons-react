import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyu3op__j.css';
import '../../css/j/j37e0x93k.css';
import '../../css/q/qeni9rbnv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyu3op__j"/><path class="j37e0x93k"/><path class="qeni9rbnv"/>`,
		"fallback": "ant-design:tag-twotone",
	});
}

export default Component;
