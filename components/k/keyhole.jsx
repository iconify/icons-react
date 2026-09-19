import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/j_h_6urrp.css';
import '../../css/z/zm219lbip.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path clip-rule="evenodd" class="j_h_6urrp"/><path class="zm219lbip"/></g>`,
		"fallback": "icon-park:keyhole",
	});
}

export default Component;
