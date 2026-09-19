import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_brepse.css';
import '../../css/b/bjbbfsb0r.css';
import '../../css/l/l-9oxvbho.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv_brepse"/><path class="bjbbfsb0r"/><path class="l-9oxvbho"/>`,
		"fallback": "ant-design:pause-circle-twotone",
	});
}

export default Component;
