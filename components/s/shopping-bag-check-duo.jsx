import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sust44jvl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jg3y9yc8q.css';
import '../../css/k/kmvaoyg2v.css';
import '../../css/z/z05-hg-by.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary sust44jvl"/><g class="dt0cm9dhy primary"><path class="jg3y9yc8q"/><path class="kmvaoyg2v"/><path class="z05-hg-by"/></g>`,
		"fallback": "iconaut:shopping-bag-check-duo",
	});
}

export default Component;
