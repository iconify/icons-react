import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/h/hrq90hfel.css';
import '../../css/a/ahr5bzeub.css';
import '../../css/i/ibkckucpw.css';
import '../../css/z/zicicorog.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><circle class="hrq90hfel"/><path class="ahr5bzeub"/><path class="ibkckucpw"/><path class="zicicorog"/></g>`,
		"fallback": "icon-park:trademark",
	});
}

export default Component;
