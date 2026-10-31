import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/lkf20xfex.css';
import '../../css/n/ntktkh31h.css';
import '../../css/q/qri0hac_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="lkf20xfex"/><path class="ntktkh31h wm-k"/><path class="qri0hac_m wm-a"/></g>`,
		"fallback": "withicons-kawaii:toran",
	});
}

export default Component;
