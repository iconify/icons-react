import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pvphkvz9x.css';
import '../../css/u/uehekwelt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pvphkvz9x"/><path class="uehekwelt"/></g>`,
		"fallback": "healthicons:malaria-outbreak",
	});
}

export default Component;
