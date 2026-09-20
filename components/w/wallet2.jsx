import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pnrdlj49i.css';
import '../../css/l/lekeiyb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pnrdlj49i"/><path class="lekeiyb2q"/></g>`,
		"fallback": "reicon:wallet2",
	});
}

export default Component;
