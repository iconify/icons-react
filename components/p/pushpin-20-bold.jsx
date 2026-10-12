import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktghhy0et.css';
import '../../css/e/ept6rpbfu.css';
import '../../css/g/ga3wfsbxu.css';
import '../../css/v/vz2ceoucx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktghhy0et"/><path class="ept6rpbfu"/><path class="ga3wfsbxu"/><path class="vz2ceoucx"/>`,
		"fallback": "energy-icons:pushpin-20-bold",
	});
}

export default Component;
