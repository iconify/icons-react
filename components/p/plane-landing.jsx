import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jmg48bweq.css';
import '../../css/l/l9tblwbck.css';
import '../../css/z/zl3xxac3m.css';
import '../../css/u/u83h24b3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="jmg48bweq"/><path class="l9tblwbck wm-shine"/><path class="wm-k zl3xxac3m"/><path class="u83h24b3i wm-a"/></g>`,
		"fallback": "withicons-kawaii:plane-landing",
	});
}

export default Component;
