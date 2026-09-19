import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvkzdkbth.css';
import '../../css/j/jiqqgjbyl.css';
import '../../css/q/qdwhrdl3w.css';
import '../../css/z/zwmgmbqzr.css';
import '../../css/r/r7k436bkt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="mvkzdkbth"/><rect class="jiqqgjbyl"/><path class="qdwhrdl3w"/><path class="zwmgmbqzr"/><circle class="r7k436bkt"/></g>`,
		"fallback": "icon-park:wallet-one",
	});
}

export default Component;
