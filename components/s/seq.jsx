import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kouiwvecw.css';
import '../../css/k/kz4_g2b8b.css';
import '../../css/y/yz8hndo5g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kouiwvecw"/><path class="kz4_g2b8b"/><path class="yz8hndo5g"/>`,
		"fallback": "selfhst:seq",
	});
}

export default Component;
