import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw5ds4b9n.css';
import '../../css/r/r6--z6kjy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="lw5ds4b9n"/><path class="r6--z6kjy"/>`,
		"fallback": "ion:male-outline",
	});
}

export default Component;
