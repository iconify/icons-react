import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n502x1bvx.css';
import '../../css/q/qcwre9owc.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n502x1bvx"/><path class="qcwre9owc"/>`,
		"fallback": "gis:map-stat",
	});
}

export default Component;
