import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ciwk43b4p.css';
import '../../css/l/lt-gj_bes.css';
import '../../css/e/e8prs8-2z.css';
import '../../css/k/k5ydo-boy.css';
import '../../css/v/vve00jqbt.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ciwk43b4p"/><path clip-rule="evenodd" class="lt-gj_bes"/><path class="e8prs8-2z"/><path clip-rule="evenodd" class="k5ydo-boy"/><path class="vve00jqbt"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:train-circle-off",
	});
}

export default Component;
