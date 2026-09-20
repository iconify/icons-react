import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i6k0fx_5q.css';
import '../../css/j/jizm28cqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="i6k0fx_5q"/><path class="jizm28cqz"/></g>`,
		"fallback": "keyline-icons:shuffle-sharp-two-tone",
	});
}

export default Component;
