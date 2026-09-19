import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu5b3g62n.css';
import '../../css/l/lkpw8_1oe.css';
import '../../css/r/rnv21gk7i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu5b3g62n"/><path class="lkpw8_1oe"/><path class="rnv21gk7i"/>`,
		"fallback": "fxemoji:squaredng",
	});
}

export default Component;
