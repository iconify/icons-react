import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hw5l17qef.css';
import '../../css/k/kgvwdybzv.css';
import '../../css/p/pr4hfob0i.css';
import '../../css/t/t1hpgfxns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hw5l17qef"/><path class="kgvwdybzv wm-a"/><path class="pr4hfob0i"/><path class="t1hpgfxns wm-a"/></g>`,
		"fallback": "withicons:luggage-duo",
	});
}

export default Component;
