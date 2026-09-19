import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q693w62tt.css';
import '../../css/h/h7jmoqb4s.css';
import '../../css/l/lhgbtcbov.css';
import '../../css/j/j8yh1x58g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q693w62tt"/><path class="h7jmoqb4s"/><path class="lhgbtcbov"/><path class="j8yh1x58g"/>`,
		"fallback": "carbon:pcn-military",
	});
}

export default Component;
