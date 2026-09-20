import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kljix3b2j.css';
import '../../css/g/gb6l_zk0s.css';
import '../../css/b/bbjq83b2n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kljix3b2j"/><path class="gb6l_zk0s"/><path class="bbjq83b2n"/>`,
		"fallback": "selfhst:mailpit",
	});
}

export default Component;
