import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_brepse.css';
import '../../css/h/hm0sgkbtd.css';
import '../../css/f/f38wegb4y.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv_brepse"/><path class="hm0sgkbtd"/><path class="f38wegb4y"/>`,
		"fallback": "ant-design:question-circle-twotone",
	});
}

export default Component;
