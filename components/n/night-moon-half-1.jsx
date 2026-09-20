import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tun2umbwx.css';
import '../../css/b/b2l0ek-ay.css';
import '../../css/h/hp92jekob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tun2umbwx"/><path class="b2l0ek-ay"/><path class="hp92jekob"/></g>`,
		"fallback": "streamline-ultimate-color:night-moon-half-1",
	});
}

export default Component;
