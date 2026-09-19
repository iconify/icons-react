import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/ce2reykpi.css';
import '../../css/i/ipjpbhbyx.css';
import '../../css/e/e9218ck5j.css';
import '../../css/c/c0q8lebsr.css';
import '../../css/u/udq2j7b9c.css';
import '../../css/u/uwdy9gkip.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path clip-rule="evenodd" class="ce2reykpi"/><path class="ipjpbhbyx"/><path class="e9218ck5j"/><path class="c0q8lebsr"/><path class="udq2j7b9c"/><path class="uwdy9gkip"/></g>`,
		"fallback": "icon-park:pesticide",
	});
}

export default Component;
