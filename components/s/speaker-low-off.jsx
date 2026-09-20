import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/a/aj7ls7_-n.css';
import '../../css/l/lb2nr-bwd.css';
import '../../css/d/dyrcd-bsw.css';
import '../../css/s/s_z26hb9j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="aj7ls7_-n"/><path class="lb2nr-bwd"/></g><path clip-rule="evenodd" class="dyrcd-bsw"/><path class="s_z26hb9j"/></g>`,
		"fallback": "pepicons-print:speaker-low-off",
	});
}

export default Component;
