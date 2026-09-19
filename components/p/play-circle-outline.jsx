import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_brepse.css';
import '../../css/j/jwatnmbjh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv_brepse"/><path class="jwatnmbjh"/>`,
		"fallback": "ant-design:play-circle-outline",
	});
}

export default Component;
