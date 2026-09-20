import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyye1n_ow.css';
import '../../css/m/mkgj1odis.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyye1n_ow"/><path class="mkgj1odis"/>`,
		"fallback": "selfhst:reclaimerr-dark",
	});
}

export default Component;
