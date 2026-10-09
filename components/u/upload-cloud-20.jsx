import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd4d16bdk.css';
import '../../css/s/saqgotbpl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd4d16bdk"/><path class="saqgotbpl"/>`,
		"fallback": "energy-icons:upload-cloud-20",
	});
}

export default Component;
