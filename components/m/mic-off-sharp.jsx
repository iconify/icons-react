import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyk9gzbzx.css';
import '../../css/g/g1pzq4t8l.css';
import '../../css/j/jucagptoj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyk9gzbzx"/><path class="g1pzq4t8l"/><path class="jucagptoj"/>`,
		"fallback": "ion:mic-off-sharp",
	});
}

export default Component;
