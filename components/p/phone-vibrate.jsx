import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhe0-lb_r.css';
import '../../css/j/jw9xiyagq.css';
import '../../css/x/x2w0zw0xi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhe0-lb_r"/><path class="jw9xiyagq"/><path class="x2w0zw0xi"/>`,
		"fallback": "streamline-pixel:phone-vibrate",
	});
}

export default Component;
