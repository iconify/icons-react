import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dhjw8b08q.css';
import '../../css/d/dorurldnh.css';
import '../../css/l/l07-_1bjq.css';
import '../../css/n/nmq5enqga.css';
import '../../css/e/e-gsjcw2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="dhjw8b08q"/><path class="dorurldnh wm-shine"/><path class="l07-_1bjq wm-k"/><path class="nmq5enqga wm-a"/><path class="e-gsjcw2p wm-deco"/></g>`,
		"fallback": "withicons-kawaii:sailboat",
	});
}

export default Component;
