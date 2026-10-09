import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x71_24qub.css';
import '../../css/c/cvi3d18na.css';
import '../../css/x/xpy4gbb2q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x71_24qub"/><path class="cvi3d18na"/><path class="xpy4gbb2q"/>`,
		"fallback": "energy-icons:jerrycan-48",
	});
}

export default Component;
