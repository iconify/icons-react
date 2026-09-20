import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/smg6drbrb.css';
import '../../css/q/q4kr8xbcz.css';
import '../../css/i/iaosuyb-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="smg6drbrb"/><path class="q4kr8xbcz"/><path class="iaosuyb-q"/></g>`,
		"fallback": "streamline-freehand:moving-walkway-luggage-1",
	});
}

export default Component;
