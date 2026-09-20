import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yk6fy9b5i.css';
import '../../css/i/icbrkrabx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yk6fy9b5i"/><path class="icbrkrabx"/></g>`,
		"fallback": "reicon:search-favorite2",
	});
}

export default Component;
