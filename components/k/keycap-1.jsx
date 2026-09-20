import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e28o0mlgm.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/q/q2ya84b7g.css';
import '../../css/b/bl4mzjxma.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e28o0mlgm"/><g class="rpvb-o6bq"><path clip-rule="evenodd" class="q2ya84b7g"/><path class="bl4mzjxma"/></g>`,
		"fallback": "openmoji:keycap-1",
	});
}

export default Component;
