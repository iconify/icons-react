import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/u/ualj8xbvx.css';
import '../../css/t/tcrnivb-g.css';
import '../../css/b/b4xx4tb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ualj8xbvx"/><path class="tcrnivb-g"/><path class="b4xx4tb1g"/></g>`,
		"fallback": "hugeicons:mail-search-01",
	});
}

export default Component;
