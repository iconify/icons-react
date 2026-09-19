import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/ghfgsj2ga.css';
import '../../css/k/k16gn-bll.css';
import '../../css/l/llr_2sbko.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="ghfgsj2ga"/><path class="k16gn-bll"/><path class="llr_2sbko"/></g>`,
		"fallback": "icon-park:parking",
	});
}

export default Component;
