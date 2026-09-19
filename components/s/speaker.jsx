import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o29qi7b6u.css';
import '../../css/d/dwh0e6bgs.css';
import '../../css/p/pt-pcmp0v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o29qi7b6u"/><path class="dwh0e6bgs"/><path class="pt-pcmp0v"/>`,
		"fallback": "cil:speaker",
	});
}

export default Component;
