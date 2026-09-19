import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipdpbnbqq.css';
import '../../css/y/yv_brepse.css';
import '../../css/x/xoqg9nb3m.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipdpbnbqq"/><path class="yv_brepse"/><path class="xoqg9nb3m"/>`,
		"fallback": "ant-design:up-circle-twotone",
	});
}

export default Component;
