import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr7325j1p.css';
import '../../css/v/vix1e0hxe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr7325j1p"/><path class="vix1e0hxe"/>`,
		"fallback": "icomoon-free:sina-weibo",
	});
}

export default Component;
