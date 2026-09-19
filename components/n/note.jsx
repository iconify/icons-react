import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxbe2vbtu.css';
import '../../css/j/jk7vrq09y.css';
import '../../css/z/ziq40nb1a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxbe2vbtu"/><path class="jk7vrq09y"/><path class="ziq40nb1a"/>`,
		"fallback": "fxemoji:note",
	});
}

export default Component;
