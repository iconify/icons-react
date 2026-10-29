import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/iszg7ccwj.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/k/k6tf0lb3j.css';
import '../../css/g/gdif04buu.css';
import '../../css/j/jmku5acuo.css';
import '../../css/d/da8zwfb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="iszg7ccwj wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="k6tf0lb3j wm-k"/><path class="gdif04buu wm-a"/><path class="jmku5acuo wm-s"/><path class="da8zwfb5x wm-a"/></g>`,
		"fallback": "withicons:screen-share-blueprint",
	});
}

export default Component;
