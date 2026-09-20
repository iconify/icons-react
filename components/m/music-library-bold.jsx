import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ccaahidjq.css';
import '../../css/f/fwdp9bc6y.css';
import '../../css/n/nhny52bzl.css';
import '../../css/y/ybvayg3ql.css';
import '../../css/r/r1qckhbuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ccaahidjq"/><path class="fwdp9bc6y"/><path clip-rule="evenodd" class="nhny52bzl"/><path class="ybvayg3ql"/><path class="r1qckhbuy"/></g>`,
		"fallback": "solar:music-library-bold",
	});
}

export default Component;
