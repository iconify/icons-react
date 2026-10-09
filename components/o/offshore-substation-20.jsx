import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjnxpnb1o.css';
import '../../css/m/mr3oerbqw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjnxpnb1o"/><path class="mr3oerbqw"/>`,
		"fallback": "energy-icons:offshore-substation-20",
	});
}

export default Component;
