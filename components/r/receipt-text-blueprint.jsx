import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/iybtqzc1y.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/q/qcj08-q2z.css';
import '../../css/w/w302-hd8l.css';
import '../../css/k/kucshig4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="iybtqzc1y wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="qcj08-q2z wm-k"/><path class="w302-hd8l wm-a"/><path class="kucshig4r wm-k"/></g>`,
		"fallback": "withicons:receipt-text-blueprint",
	});
}

export default Component;
