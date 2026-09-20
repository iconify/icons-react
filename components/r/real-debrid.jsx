import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lalxt3bxq.css';
import '../../css/t/tsc0xqbph.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lalxt3bxq"/><path class="tsc0xqbph"/>`,
		"fallback": "selfhst:real-debrid",
	});
}

export default Component;
