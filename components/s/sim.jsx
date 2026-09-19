import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/r/rea5bibqm.css';
import '../../css/l/lh3k6dbwo.css';
import '../../css/h/hwf0aab2i.css';
import '../../css/j/jcocdpb8j.css';
import '../../css/s/sr6x3ialb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="rea5bibqm"/><path class="lh3k6dbwo"/><path class="hwf0aab2i"/><path class="jcocdpb8j"/><path class="sr6x3ialb"/></g>`,
		"fallback": "icon-park:sim",
	});
}

export default Component;
