import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_ya_cbut.css';
import '../../css/d/ds4k--4aj.css';
import '../../css/f/fqt_spbrj.css';
import '../../css/h/h6sr52b2c.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_ya_cbut"/><path class="ds4k--4aj"/><path class="fqt_spbrj"/><path class="h6sr52b2c"/>`,
		"fallback": "fxemoji:mensshoe",
	});
}

export default Component;
