import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zncj9xbho.css';
import '../../css/j/j2czn_mgh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zncj9xbho"/><path class="j2czn_mgh"/>`,
		"fallback": "energy-icons:thermal-camera-48",
	});
}

export default Component;
