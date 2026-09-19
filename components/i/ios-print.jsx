import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht8b8sbjq.css';
import '../../css/f/fr1_bz0hn.css';
import '../../css/o/ocqv0hbcj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht8b8sbjq"/><path class="fr1_bz0hn"/><path class="ocqv0hbcj"/>`,
		"fallback": "ion:ios-print",
	});
}

export default Component;
