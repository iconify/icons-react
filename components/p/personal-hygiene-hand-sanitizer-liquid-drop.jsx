import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/ld0ypzpmg.css';
import '../../css/h/hag85ey0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ld0ypzpmg"/><path class="hag85ey0b"/></g>`,
		"fallback": "covid:personal-hygiene-hand-sanitizer-liquid-drop",
	});
}

export default Component;
