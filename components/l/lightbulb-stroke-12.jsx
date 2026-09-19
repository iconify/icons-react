import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/aq77xd3-s.css';
import '../../css/a/a7xkzu57u.css';
import '../../css/c/cqxb_cc5b.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="aq77xd3-s"/><path class="a7xkzu57u"/></g><path class="cqxb_cc5b"/>`,
		"fallback": "garden:lightbulb-stroke-12",
	});
}

export default Component;
