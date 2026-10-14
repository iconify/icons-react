import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/kdhpsubmy.css';
import '../../css/r/rsjn8er-c.css';
import '../../css/y/yunzxcoqo.css';
import '../../css/t/tfgcibbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="kdhpsubmy"/><path class="rsjn8er-c"/><path class="yunzxcoqo"/><path class="tfgcibbro"/></g>`,
		"fallback": "matita:table",
	});
}

export default Component;
