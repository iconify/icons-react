import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjnxpnb1o.css';
import '../../css/d/dk6kerbsg.css';
import '../../css/b/be65o352o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjnxpnb1o"/><path class="dk6kerbsg"/><path class="be65o352o"/>`,
		"fallback": "energy-icons:piston-20",
	});
}

export default Component;
