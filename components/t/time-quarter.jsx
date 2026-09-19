import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bql_2u4-a.css';
import '../../css/u/uwprsn25p.css';
import '../../css/d/d8sy1ipse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bql_2u4-a"/><path class="uwprsn25p"/><path class="d8sy1ipse"/></g>`,
		"fallback": "hugeicons:time-quarter",
	});
}

export default Component;
