import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z4jtr5b1e.css';
import '../../css/a/al8--bbwn.css';
import '../../css/f/fdhlmacdj.css';
import '../../css/v/vfghup6ai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="z4jtr5b1e"/><path class="al8--bbwn wm-k"/><path class="fdhlmacdj wm-k"/><path class="vfghup6ai wm-a"/></g>`,
		"fallback": "withicons:tree-pine-sketch",
	});
}

export default Component;
