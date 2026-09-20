import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/j/jpxfh3bie.css';
import '../../css/x/xm1j_w9pv.css';
import '../../css/z/z61wglbot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="jpxfh3bie"/><path class="xm1j_w9pv"/><path class="z61wglbot"/></g>`,
		"fallback": "streamline-cyber:kirby-2",
	});
}

export default Component;
