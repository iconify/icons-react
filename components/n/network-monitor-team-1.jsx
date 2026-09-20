import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yaasi6hps.css';
import '../../css/p/p85yxxb5a.css';
import '../../css/z/zwuptyfnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yaasi6hps"/><path class="p85yxxb5a"/><path class="zwuptyfnt"/></g>`,
		"fallback": "streamline-freehand-color:network-monitor-team-1",
	});
}

export default Component;
