import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/am013tb7n.css';
import '../../css/g/g10l0epqo.css';
import '../../css/a/a7not2p8q.css';
import '../../css/e/e-x1c4yrw.css';
import '../../css/m/m4gqnvbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="am013tb7n"/><path class="g10l0epqo wm-shine"/><path class="a7not2p8q wm-k"/><path class="e-x1c4yrw wm-a"/><path class="m4gqnvbgu wm-deco"/></g>`,
		"fallback": "withicons-kawaii:text-cursor-input",
	});
}

export default Component;
