import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b17oeotjk.css';
import '../../css/a/ad5qjploe.css';
import '../../css/l/lvcq9zb7u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b17oeotjk"/><path class="ad5qjploe"/><path class="lvcq9zb7u"/>`,
		"fallback": "selfhst:mobilizon",
	});
}

export default Component;
