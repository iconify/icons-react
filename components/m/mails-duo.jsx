import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uem6nqbvo.css';
import '../../css/a/aap5atbkv.css';
import '../../css/s/s8-jh0bvg.css';
import '../../css/r/r4k-9nyuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uem6nqbvo"/><path class="aap5atbkv"/><path class="s8-jh0bvg wm-a"/><path class="r4k-9nyuf wm-a"/></g>`,
		"fallback": "withicons:mails-duo",
	});
}

export default Component;
