import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j1d8v-bos.css';
import '../../css/a/a9nbxkhse.css';
import '../../css/c/cnc8kxp4p.css';
import '../../css/p/p235whbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="j1d8v-bos"/><circle class="a9nbxkhse"/><circle class="cnc8kxp4p"/><path class="p235whbik"/></g>`,
		"fallback": "lucide:paw-print",
	});
}

export default Component;
