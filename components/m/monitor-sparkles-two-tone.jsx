import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/utox1qbcx.css';
import '../../css/j/jce6gtx8n.css';
import '../../css/s/s2-fsy12s.css';
import '../../css/e/er917wb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="utox1qbcx"/><path class="jce6gtx8n"/><path class="s2-fsy12s"/><path class="er917wb7j"/></g>`,
		"fallback": "keyline-icons:monitor-sparkles-two-tone",
	});
}

export default Component;
