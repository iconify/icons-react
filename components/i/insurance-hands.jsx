import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i4zogmbmh.css';
import '../../css/l/lhwobfbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="i4zogmbmh"/><path class="lhwobfbsh"/></g>`,
		"fallback": "streamline-sharp:insurance-hands",
	});
}

export default Component;
