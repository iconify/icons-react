import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnsha0bgv.css';
import '../../css/g/gol1xybds.css';
import '../../css/c/czudsiv_x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnsha0bgv"/><path class="gol1xybds"/><path class="czudsiv_x"/>`,
		"fallback": "streamline-pixel:interface-essential-wifi-feed",
	});
}

export default Component;
