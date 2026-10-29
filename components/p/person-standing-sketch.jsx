import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fpmz6qgbp.css';
import '../../css/d/dmvw43b8a.css';
import '../../css/u/ul8icbcwx.css';
import '../../css/g/glqwjopdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fpmz6qgbp wm-k"/><path class="dmvw43b8a wm-a"/><path class="ul8icbcwx wm-k"/><path class="glqwjopdo wm-a"/></g>`,
		"fallback": "withicons:person-standing-sketch",
	});
}

export default Component;
