import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q83hv0ath.css';
import '../../css/c/cj7oqvbrl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q83hv0ath"/><path class="cj7oqvbrl"/>`,
		"fallback": "ion:ios-link",
	});
}

export default Component;
