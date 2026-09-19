import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qetnckbkp.css';
import '../../css/k/kgks08b4h.css';
import '../../css/u/ubw9i8bzo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qetnckbkp"/><path class="kgks08b4h"/><path class="ubw9i8bzo"/>`,
		"fallback": "fxemoji:toykotower",
	});
}

export default Component;
