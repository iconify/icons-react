import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m_pivy1tn.css';
import '../../css/k/k7pmcabam.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m_pivy1tn"/><path class="k7pmcabam"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:no-entry-circle",
	});
}

export default Component;
