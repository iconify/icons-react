import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hkrdmqbvi.css';
import '../../css/k/kn71gxjix.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hkrdmqbvi"/><path class="kn71gxjix"/></g>`,
		"fallback": "bi:sign-stop-lights-fill",
	});
}

export default Component;
