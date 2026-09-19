import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsg5j7ibl.css';
import '../../css/v/v28q1cbjg.css';
import '../../css/i/ixi7vhbji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsg5j7ibl"/><path class="v28q1cbjg"/><rect class="ixi7vhbji"/>`,
		"fallback": "ion:mic-circle-outline",
	});
}

export default Component;
