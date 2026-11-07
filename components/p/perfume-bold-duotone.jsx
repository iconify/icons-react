import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/unglyeb7q.css';
import '../../css/l/ldk1s7bmt.css';
import '../../css/d/d_o7v-41g.css';
import '../../css/q/qri23lb0u.css';
import '../../css/p/pmppsx50i.css';
import '../../css/y/yvsxkeb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="unglyeb7q"/><path class="ldk1s7bmt"/><path class="d_o7v-41g"/></g><path class="qri23lb0u"/><path class="pmppsx50i"/><path class="yvsxkeb5i"/>`,
		"fallback": "solar:perfume-bold-duotone",
	});
}

export default Component;
