import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zh3an4bmg.css';
import '../../css/j/jj_krmbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zh3an4bmg"/><path class="jj_krmbdb"/></g>`,
		"fallback": "streamline-ultimate:seo-search-graph",
	});
}

export default Component;
