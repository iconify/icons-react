import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xteprklyo.css';
import '../../css/m/moem5k2vk.css';
import '../../css/z/zy870cbtg.css';
import '../../css/a/al9qvobnd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xteprklyo"/><path class="moem5k2vk"/><circle class="zy870cbtg"/><ellipse class="al9qvobnd"/>`,
		"fallback": "flag:mv-1x1",
	});
}

export default Component;
