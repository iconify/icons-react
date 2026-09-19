import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0z4jk4ef.css';
import '../../css/d/dbsjb5b_u.css';
import '../../css/l/lzvh4scbg.css';
import '../../css/c/cd3dpacbb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="s0z4jk4ef"/><path class="dbsjb5b_u"/><path class="lzvh4scbg"/><path class="cd3dpacbb"/>`,
		"fallback": "fxemoji:ringingbell",
	});
}

export default Component;
