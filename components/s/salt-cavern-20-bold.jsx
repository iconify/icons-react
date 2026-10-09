import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf341pb1x.css';
import '../../css/z/z4ddoubly.css';
import '../../css/x/xshgi_b-w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf341pb1x"/><path class="z4ddoubly"/><path class="xshgi_b-w"/>`,
		"fallback": "energy-icons:salt-cavern-20-bold",
	});
}

export default Component;
