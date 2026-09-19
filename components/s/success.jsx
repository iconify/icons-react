import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/l/lcz-itbyl.css';
import '../../css/e/el_008dkm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="lcz-itbyl"/><path class="el_008dkm"/></g>`,
		"fallback": "icon-park:success",
	});
}

export default Component;
