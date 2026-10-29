import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oa9a2oboa.css';
import '../../css/w/wwbs7qbyv.css';
import '../../css/a/anua2ob4h.css';
import '../../css/h/h7xnus5-e.css';
import '../../css/u/unefcsbmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="oa9a2oboa"/><path class="wwbs7qbyv"/><path class="anua2ob4h wm-a"/><path class="h7xnus5-e"/><path class="unefcsbmw"/></g>`,
		"fallback": "withicons:watch-duo",
	});
}

export default Component;
