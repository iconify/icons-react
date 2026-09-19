import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d_mb6190u.css';
import '../../css/q/q6v7zwbwj.css';
import '../../css/y/yjo9i5b3u.css';
import '../../css/w/w5m7edbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="d_mb6190u"/><path class="q6v7zwbwj"/><path class="yjo9i5b3u"/><path class="w5m7edbcj"/></g>`,
		"fallback": "hugeicons:shopping-basket-check-out-02",
	});
}

export default Component;
