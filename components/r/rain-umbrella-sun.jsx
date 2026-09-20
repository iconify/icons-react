import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/b1030dbjw.css';
import '../../css/f/fnevsimcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="b1030dbjw"/><path class="fnevsimcc"/></g>`,
		"fallback": "streamline-ultimate:rain-umbrella-sun",
	});
}

export default Component;
