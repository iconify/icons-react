import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3_8jwp2c.css';
import '../../css/a/acs8qldpc.css';
import '../../css/b/b29-gmble.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k3_8jwp2c"/><path class="acs8qldpc"/><path class="b29-gmble"/></g>`,
		"fallback": "glyphs-poly:playback-speed",
	});
}

export default Component;
