import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv4lvww3m.css';
import '../../css/p/pug9g9bnq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="iv4lvww3m"/><path class="pug9g9bnq"/>`,
		"fallback": "selfhst:rhasspy",
	});
}

export default Component;
