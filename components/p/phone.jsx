import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wr6slzm6t.css';
import '../../css/f/fpth1bb7p.css';
import '../../css/e/ebjwlsagl.css';
import '../../css/v/vhcww73cv.css';

const viewBox = {"width":19,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wr6slzm6t"/><path class="fpth1bb7p"/><circle class="ebjwlsagl"/><path class="vhcww73cv"/></g>`,
		"fallback": "et:phone",
	});
}

export default Component;
