import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa-o7h.css';
import '../../css/s/s8h7-c.css';
import '../../css/n/n0_dif.css';
import '../../css/s/s6vdjj.css';
import '../../css/h/h3davo.css';
import '../../css/c/c4x52o.css';
import '../../css/m/mtr4or.css';
import '../../css/s/so-from-28.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa-o7h s8h7-c"/><path class="n0_dif qa-o7h"/><path class="qa-o7h s6vdjj"/><path class="h3davo qa-o7h"/><path class="c4x52o qa-o7h"/><path class="mtr4or qa-o7h"/>`,
		"fallback": "line-md:list-3",
	});
}

export default Component;
