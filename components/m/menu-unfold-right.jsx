import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/q/qtqj_t.css';
import '../../css/u/uw82ng.css';
import '../../css/r/ricadr.css';
import '../../css/r/rqdeuu.css';
import '../../css/s/so-from-12.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c qtqj_t"/><path class="a0m25c uw82ng"/><path class="a0m25c ricadr"/><path class="a0m25c rqdeuu"/>`,
		"fallback": "line-md:menu-unfold-right",
	});
}

export default Component;
