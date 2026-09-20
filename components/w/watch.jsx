import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i-pyeiv3k.css';
import '../../css/i/ihrs6cbet.css';
import '../../css/f/ft0aqxb1k.css';
import '../../css/j/j2eap3bgd.css';
import '../../css/d/d83zckpel.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i-pyeiv3k"/><path class="ihrs6cbet"/><path class="ft0aqxb1k"/><path class="j2eap3bgd"/><path class="d83zckpel"/></g>`,
		"fallback": "pepicons-pencil:watch",
	});
}

export default Component;
