import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppubembly.css';
import '../../css/h/h9fsqi6ij.css';
import '../../css/d/dup3v4bcs.css';
import '../../css/e/evhgdbbjt.css';
import '../../css/j/j2p8_jaiw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ppubembly"/><path class="h9fsqi6ij"/><path class="dup3v4bcs"/><path class="evhgdbbjt"/><path class="j2p8_jaiw"/>`,
		"fallback": "selfhst:iplayarr",
	});
}

export default Component;
