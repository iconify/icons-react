import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/fnpa9gb-g.css';
import '../../css/p/p1il2zuoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="fnpa9gb-g"/><path class="p1il2zuoq"/></g>`,
		"fallback": "hugeicons:lamp-01",
	});
}

export default Component;
