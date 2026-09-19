import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tcrnivb-g.css';
import '../../css/s/s8tobfb1e.css';
import '../../css/z/zxu50n5kf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="tcrnivb-g"/><path class="s8tobfb1e"/><path class="zxu50n5kf"/></g>`,
		"fallback": "hugeicons:mail-reply-01",
	});
}

export default Component;
