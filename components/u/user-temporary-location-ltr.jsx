import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhdtu4l9b.css';
import '../../css/h/hzbrfoizy.css';
import '../../css/d/do_17v_nq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhdtu4l9b"/><path class="hzbrfoizy"/><circle class="do_17v_nq"/>`,
		"fallback": "ooui:user-temporary-location-ltr",
	});
}

export default Component;
