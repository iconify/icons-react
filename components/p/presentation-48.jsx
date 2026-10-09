import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smjtv-oxv.css';
import '../../css/y/yixl0qbmg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smjtv-oxv"/><path class="yixl0qbmg"/>`,
		"fallback": "energy-icons:presentation-48",
	});
}

export default Component;
