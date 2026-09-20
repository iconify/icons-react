import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c1vr99bnq.css';
import '../../css/h/hh09d7bqz.css';
import '../../css/e/euwq71b-p.css';
import '../../css/f/fdsertx7f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c1vr99bnq"/><path class="hh09d7bqz"/><path class="euwq71b-p"/><path class="fdsertx7f"/></g>`,
		"fallback": "streamline-flex-color:voice-mail",
	});
}

export default Component;
