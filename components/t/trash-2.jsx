import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a-ap2ibub.css';
import '../../css/k/k63e-ip9x.css';
import '../../css/a/araeuyb9p.css';
import '../../css/w/wuxib33uk.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="a-ap2ibub"/><path class="k63e-ip9x wm-shine"/><path class="araeuyb9p wm-k"/><path class="wm-a wuxib33uk"/><path class="i49wp7b0m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:trash-2",
	});
}

export default Component;
