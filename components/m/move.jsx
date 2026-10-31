import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/r/ruiz-dbqz.css';
import '../../css/k/kl_mwkbhb.css';
import '../../css/b/b2qohnadj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ruiz-dbqz wm-k"/><path class="kl_mwkbhb wm-a"/><path class="b2qohnadj wm-deco"/></g>`,
		"fallback": "withicons-kawaii:move",
	});
}

export default Component;
