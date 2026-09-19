import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v16dgddoa.css';
import '../../css/y/y4nobsbrk.css';
import '../../css/z/ziavmd8sc.css';
import '../../css/k/kp1357raw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="v16dgddoa"/><path class="y4nobsbrk"/><path class="ziavmd8sc"/><path class="kp1357raw"/>`,
		"fallback": "famicons:radio-sharp",
	});
}

export default Component;
