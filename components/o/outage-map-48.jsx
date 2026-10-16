import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvjwhfbog.css';
import '../../css/e/ef6a7mfgj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvjwhfbog"/><path class="ef6a7mfgj"/>`,
		"fallback": "energy-icons:outage-map-48",
	});
}

export default Component;
