import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nht91tbvp.css';
import '../../css/z/zk_sql93n.css';
import '../../css/u/u2f-v0b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nht91tbvp"/><path class="zk_sql93n"/><path class="u2f-v0b3x"/></g>`,
		"fallback": "streamline-freehand-color:saving-bull-market-graph-bars",
	});
}

export default Component;
