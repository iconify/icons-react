import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um4cf3bps.css';
import '../../css/g/g2l6abblz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um4cf3bps"/><path class="g2l6abblz"/>`,
		"fallback": "energy-icons:share-2-48-bold",
	});
}

export default Component;
