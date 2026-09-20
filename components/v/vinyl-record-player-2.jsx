import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zlkt_lbys.css';
import '../../css/y/yi-zuwb-b.css';
import '../../css/g/gjdjc1rxg.css';
import '../../css/d/d2j0uq01z.css';
import '../../css/o/orc0r4bvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zlkt_lbys"/><path class="yi-zuwb-b"/><path class="gjdjc1rxg"/><path class="d2j0uq01z"/><path class="orc0r4bvr"/></g>`,
		"fallback": "streamline-freehand-color:vinyl-record-player-2",
	});
}

export default Component;
