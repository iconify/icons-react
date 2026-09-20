import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4hkjobnc.css';
import '../../css/m/moe9y6t0w.css';
import '../../css/g/g62bnqbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4hkjobnc"/><path class="moe9y6t0w"/><path class="g62bnqbfm"/>`,
		"fallback": "uim:table",
	});
}

export default Component;
