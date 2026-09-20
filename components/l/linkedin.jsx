import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhxajb.css';
import '../../css/o/oxmpwq.css';
import '../../css/y/yk_wkq.css';
import '../../css/t/teqz3l.css';
import '../../css/q/q5p-eg.css';
import '../../css/f/fade-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="mhxajb"/><path class="oxmpwq yk_wkq"/><path class="oxmpwq teqz3l"/><path class="oxmpwq q5p-eg"/>`,
		"fallback": "line-md:linkedin",
	});
}

export default Component;
