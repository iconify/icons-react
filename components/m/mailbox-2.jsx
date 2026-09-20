import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wa8mu7blh.css';
import '../../css/u/usw6qq-kv.css';
import '../../css/f/fcskdrbyt.css';
import '../../css/t/t2boq-o6f.css';
import '../../css/c/c7mixb6tz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wa8mu7blh"/><path class="usw6qq-kv"/><path class="fcskdrbyt"/><path class="t2boq-o6f"/><path class="c7mixb6tz"/></g>`,
		"fallback": "streamline-cyber-color:mailbox-2",
	});
}

export default Component;
